# MongoDB Aggregation Pipeline Practice

## Project Setup

### Prerequisites
- Install [MongoDB](https://www.mongodb.com/try/download/community)
- Install [Node.js](https://nodejs.org/)
- Install MongoDB Compass (optional, for GUI-based database management)

### Installation Steps
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd mongodb-aggregation-practice
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start MongoDB server (if not running):
   ```sh
   mongod --dbpath=/path/to/your/data
   ```
4. Run the script to insert sample data:
   ```sh
   node seed.js
   ```
5. Start practicing aggregation queries in `practice.js`.

---

## MongoDB Aggregation Pipeline Stages

| Stage        | Description |
|-------------|-------------------------------------------------------------|
| `$match`    | Filters documents based on conditions (like `WHERE` in SQL). |
| `$group`    | Groups documents by a field and performs aggregations (sum, count, etc.). |
| `$project`  | Shapes documents by including/excluding fields. |
| `$sort`     | Sorts the documents in ascending or descending order. |
| `$limit`    | Limits the number of output documents. |
| `$skip`     | Skips a specified number of documents. |
| `$unwind`   | Deconstructs an array field into multiple documents. |
| `$lookup`   | Performs a left join with another collection. |
| `$addFields`| Adds new fields to documents. |
| `$set`      | Alias for `$addFields` (MongoDB 4.2+). |
| `$replaceRoot` | Replaces the document root with a specified field. |
| `$facet`    | Performs multiple aggregation pipelines in a single query. |
| `$bucket`   | Categorizes documents into groups based on a range. |
| `$out`      | Writes the aggregation results to a new collection. |
| `$merge`    | Merges results into an existing collection. |
| `$count`    | Returns the count of documents processed in the pipeline. |

---

## Running Aggregation Queries
Write and test your aggregation queries in `practice.js`. Example:



