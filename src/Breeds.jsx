import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function Breeds() {
  const [selectedBreedId, setSelectedBreedId] = useState(null);

  // Fetch all breeds
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ["breeds"],
    queryFn: async () => {
      const res = await fetch("https://dogapi.dog/api/v2/breeds");
      if (!res.ok) throw new Error("Failed to fetch breeds");
      return res.json();
    },
  });

  // Fetch details for selected breed
  const {
    data: breedDetails,
    isPending: detailsPending,
    isError: detailsError,
  } = useQuery({
    queryKey: ["breedDetails", selectedBreedId],
    queryFn: async () => {
      const res = await fetch(
        `https://dogapi.dog/api/v2/breeds/${selectedBreedId}`
      );
      if (!res.ok) throw new Error("Failed to fetch breed details");
      return res.json();
    },
    enabled: !!selectedBreedId,
  });

  if (isPending) return <p>Loading breeds...</p>;
  if (isError) return <p>Error loading breeds.</p>;

  if (isSuccess) {
    return (
      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* LEFT SIDE — BREED LIST */}
        <div
          style={{
            width: "40%",
            borderRight: "1px solid #ccc",
            paddingRight: "20px",
          }}
        >
          <h2>Dog Breeds</h2>

          <ul style={{ listStyle: "none", padding: 0 }}>
            {data.data.map((breed) => (
              <li
                key={breed.id}
                onClick={() => setSelectedBreedId(breed.id)}
                style={{
                  cursor: "pointer",
                  marginBottom: "8px",
                  padding: "6px 4px",
                  borderRadius: "4px",
                  background:
                    breed.id === selectedBreedId ? "#e6f0ff" : "transparent",
                  fontWeight:
                    breed.id === selectedBreedId ? "bold" : "normal",
                }}
              >
                {breed.attributes.name}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE — DETAILS PANEL */}
        <div style={{ width: "60%" }}>
          <h2>Breed Details</h2>

          {!selectedBreedId && (
            <p>Select a breed from the list to view details.</p>
          )}

          {detailsPending && <p>Loading details...</p>}
          {detailsError && <p>Error loading details.</p>}

          {breedDetails && (
            <div
              style={{
                background: "#fafafa",
                padding: "15px",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            >
              <p>
                <strong>Name:</strong>{" "}
                {breedDetails.data.attributes.name}
              </p>

              <p>
                <strong>Description:</strong>{" "}
                {breedDetails.data.attributes.description || "Not available"}
              </p>

              <p>
                <strong>Group:</strong>{" "}
                {breedDetails.data.attributes.group || "Not available"}
              </p>

              <p>
                <strong>Bred For:</strong>{" "}
                {breedDetails.data.attributes.bred_for || "Not available"}
              </p>

              <p>
                <strong>Coat:</strong>{" "}
                {breedDetails.data.attributes.coat || "Not available"}
              </p>

              <p>
                <strong>Color:</strong>{" "}
                {breedDetails.data.attributes.color || "Not available"}
              </p>

              <p>
                <strong>Life Span:</strong>{" "}
                {breedDetails.data.attributes.life.min} –{" "}
                {breedDetails.data.attributes.life.max} years
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Breeds;
