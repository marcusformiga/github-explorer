import React from 'react'
import RepositoryItem from './RepositoryItem';
import "../styles/repositories.scss"
import { useState, useEffect } from 'react';

type Repository = {
  name: string
  description: string
  html_url: string
}
const ListRepository = () => {
  const [repositories, setRepositories] = useState<Repository[]>([])
  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos").then(response => response.json().then(data => setRepositories(data)))
  }, [])
    return (
      <section className="Repository">
        <h1>Lista de repositorios</h1>
        <ul>
          {repositories.map(repositorie => {
            return <RepositoryItem key={repositorie.name} repository={repositorie}/>
        })}
        </ul>
      </section>
    );
}

export default ListRepository
