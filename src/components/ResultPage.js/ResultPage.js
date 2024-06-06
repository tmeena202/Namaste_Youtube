/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../../utils/constants";
import ResultCard from "./ResultCard";
import { Link } from "react-router-dom";

const ResultPage = () => {
  const [results, setResults] = useState([]);
  const { searchResult } = useParams(); // Access the "searchQuery" parameter
  console.log(searchResult);

  useEffect(() => {
    const getResult = async () => {
      const encodedQuery = encodeURIComponent(searchResult); // Encode for special characters
      const data = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${encodedQuery}&type=video&key=${GOOGLE_API_KEY}`
      );
      const json = await data.json();
      setResults(json.items);
    };

    getResult();
  }, [searchResult]); // Re-run useEffect when searchQuery changes

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Search Results for "{searchResult}"</h1>
      <div>
        {results.map((result, index) => (
          <Link key={index} to={`/watch?v=${result.id.videoId}`}>
            <ResultCard info={result} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
