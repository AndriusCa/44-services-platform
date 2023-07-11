import mysql from "mysql2/promise"

// gauti prisijungima prie DB
// sukurti services-platform DB, jeigu jos nera
// sukurti services lentele, jeigu jos nera
// sukurti users lenetele, jeigu jos nera
// sukurti token lentele, jeigu jos nera
// sukurti admin user, jeigu tokio nera

export async function databaseSetup() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "service-platform",
  })

  return connection
}
