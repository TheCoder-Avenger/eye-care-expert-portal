const fs = require("fs");
const path = require("path");

function csvToJson(csvFilePath, jsonFilePath) {
  fs.readFile(csvFilePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading the CSV file:", err);
      return;
    }

    try {
      // Split rows and handle various line endings
      const rows = data.split(/\r?\n/).filter((row) => row.trim() !== "");

      if (rows.length < 2) {
        console.error("The CSV file does not contain valid headers or data.");
        return;
      }

      // Extract and clean headers
      const headers = rows[0].split(",").map((header) => header.trim());

      if (headers.length === 0) {
        console.error("No valid headers found in the CSV file.");
        return;
      }

      console.log("Headers:", headers); // Debug: Log the headers

      // Convert rows to JSON
      const jsonArray = rows
        .slice(1)
        .map((row, rowIndex) => {
          const values = row.split(",").map((value) => value.trim());

          // Skip rows with incorrect number of columns
          if (values.length !== headers.length) {
            console.warn(
              `Row ${rowIndex + 1} skipped: Expected ${
                headers.length
              } values, but got ${values.length}`
            );
            return null;
          }

          // Map headers to values
          return headers.reduce((acc, header, index) => {
            acc[header] = values[index] || null; // Assign null for missing values
            return acc;
          }, {});
        })
        .filter((row) => row !== null); // Remove invalid rows

      // Debug: Log the JSON array
      console.log("JSON Array:", jsonArray);

      // Write JSON file
      fs.writeFile(
        jsonFilePath,
        JSON.stringify(jsonArray, null, 2),
        "utf-8",
        (err) => {
          if (err) {
            console.error("Error writing the JSON file:", err);
            return;
          }
          console.log("JSON file created successfully:", jsonFilePath);
        }
      );
    } catch (parseError) {
      console.error("Error parsing the CSV file:", parseError);
    }
  });
}

// Usage example:
const csvFile = path.join(__dirname, "data.csv"); // Path to your CSV file
const jsonFile = path.join(__dirname, "data.json"); // Path to save the JSON file

csvToJson(csvFile, jsonFile);
