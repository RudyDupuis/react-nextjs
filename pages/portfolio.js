import Meta from "components/Meta";
import Link from "next/link";
import { projects } from "projectsData";
import React from "react";

const portfolio = () => {
  return (
    <div>
      <Meta title="Portfolio dev" description="Suite de 70 mots" />
      <h2>Portfolio</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href="/project/[id]" as={"/project/" + project.id}>
              {project.title} <span>&rarr;</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default portfolio;
