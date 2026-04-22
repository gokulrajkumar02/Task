"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { infiniteScrollData } from "@/DB/District";

const PAGE_SIZE = 7;

type PostsType = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const getPosterData = (page: number) => {
  const start = (page * PAGE_SIZE) % infiniteScrollData.length;
  const end = start + PAGE_SIZE;

  if (end <= infiniteScrollData.length) {
    console.log("dfewd");

    return infiniteScrollData.slice(start, end);
  } else
    return [
      ...infiniteScrollData.slice(start),
      ...infiniteScrollData.slice(0, end % infiniteScrollData.length),
    ];
};

const Intersection = () => {
  const [posts, setPosts] = useState<PostsType[]>([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const IntersectionRef = useRef(null);

  const loadMoreData = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);

    setTimeout(() => {
      setPage((prev) => {
        const nextPage = prev + 1;
        const newPosterData = getPosterData(nextPage);

        setPosts((prev) => {
          return [...prev, ...newPosterData];
        });

        return nextPage;
      });
      setIsLoading(false);
    }, 300);
  }, []);

  useEffect(() => {
    const initialData = getPosterData(0);
    setPosts(initialData);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMoreData();
        }
      },
      { threshold: 1 },
    );

    if (IntersectionRef.current) observer.observe(IntersectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-[80%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-2">
        {posts.map((post, index) => {
          return (
            <div key={index} className="p-2 border border-gray-400 rounded-xl">
              <img
                src={post.image}
                alt={post.title}
                className="h-15 w-15 object-cover"
              />
              <h1>{post.title}</h1>

              <span>{post.description}</span>
            </div>
          );
        })}
      </div>
      <div
        ref={IntersectionRef}
        className="flex h-15 w-full justify-center items-center"
      >
        {isLoading && <p>Loading... </p>}
      </div>
    </div>
  );
};

export default Intersection;
