// import React from "react";
// import { useState } from "react";
// import "./comingSoonMovies.scss";
// import Btn from "../../components/btn/btn";
// import { VscChromeClose } from "react-icons/vsc";

// import Loading from "../Loading";
// import data from "./data";
// export default function ComingSoonMovies() {
//   const [newMovies, setNewMovies] = useState([]);
//   // const [showMovieDetails, setShowMovieDetails] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showInfo, setShowInfo] = useState(false);
//   const [popularMovies, setPopularMovies] = useState(true);

//   const [question, setQuestion] = useState(true);

//   const showUpcomingMovies = () => {
//     setIsLoading(true);
//     setPopularMovies(false);
//     setQuestion(false);
//     fetch(`https://imdb-api.com/en/API/ComingSoon/k_70lgfncf`)
//       .then((response) => response.json())
//       .then((data) => setNewMovies(data.items))
//       .catch((error) => console.log(error.message))
//       .finally(() => setIsLoading(false));
//   };

//   //console.log(newMovies);
//   console.log(data);
//   //const showMoreAboutMovie = () => {
//   //setShowMovieDetails(true);
//   //};
//   //const hideMoreAboutMovie = () => {
//   // setShowMovieDetails(false);
//   //};
//   return (
//     <div className="coming-soon-movies-container">
//       {popularMovies && (
//         <section>
//           <h1>Top Rated TV shows on IMBDb:</h1>
//           <div className="popular-movie-container">
//             {data.map(({ image, title, imDbRating }) => (
//               <div className="single-popular-movie" key={title}>
//                 <img src={image} alt="" className="popular-movie-img" />
//                 <div className="popular-movie-title">{title}</div>
//                 <div>{imDbRating}</div>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}
//       {question && (
//         <div>
//           <h2> What&lsquo;s coming soon? </h2>
//           <div className="btn-container">
//             <Btn
//               onClick={showUpcomingMovies}
//               btnText={"Find out"}
//               style="secondary"
//             />
//           </div>
//         </div>
//       )}

//       {isLoading && <Loading />}

//       {newMovies.length > 0 && (
//         <div>
//           <h1>Coming soon:</h1>
//           <div className="single-movie-wrapper">
//             {newMovies.map(
//               ({
//                 title,
//                 releaseState,
//                 image,
//                 plot,
//                 runtimeStr,
//                 stars,
//                 directors,
//                 genres,
//                 id,
//               }) => (
//                 <div className="single-new-movie" key={id}>
//                   <img
//                     src={image}
//                     alt={title}
//                     className="coming-soon-movies-img"
//                   />
//                   <section className="display-movie-details">
//                     <div className="single-movie-title">{title}</div>
//                     <div className="release-date">{releaseState}</div>
//                     <button
//                       onClick={() => setShowInfo(id)}
//                       className="show-more-btn"
//                     >
//                       Show more...
//                     </button>
//                   </section>
//                   {showInfo === id && (
//                     <div className="show-more-about-new-movie">
//                       <img
//                         src={image}
//                         alt={title}
//                         className="show-more-about-new-movie-img"
//                       />
//                       <div className="side-text-about-movie">
//                         <div className="side-text-about-movie-title">
//                           {title}
//                         </div>
//                         <div className="movie-release-date">
//                           Release date : {releaseState}
//                         </div>
//                         <div className="single-movie-plot-info"> {plot} </div>
//                         <div className="single-movie-runtime-genres">
//                           {runtimeStr} | {genres}
//                         </div>
//                         <div className="single-movie-directors">
//                           Director: {directors}
//                         </div>
//                         <div> Stars: {stars}</div>
//                       </div>
//                       <div className="close-more-content-icon">
//                         <VscChromeClose
//                           onClick={() => {
//                             setShowInfo(false);
//                           }}
//                           className="hide-more-about-new-movie-btn"
//                         />
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
