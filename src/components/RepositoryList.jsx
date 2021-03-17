import {  useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

//api.github.com/orgs/rocketseat/repos

const repository = {
	name: 'Unform',
	description: 'Forms in ReactJS',
	link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
	const [repositories, setRepositories] = useState([]);

	useEffect(() => {
		fetch('//api.github.com/orgs/rocketseat/repos')
			.then(response => response.json())
			.then(data => setRepositories(data))
	}, []);

	return (
		<section className="repository-list">
			<h1>Lista de repositórios</h1>

			<ul>
				<RepositoryItem repository={repository}/>
				<RepositoryItem repository={repository}/>
				<RepositoryItem repository={repository}/>
				<RepositoryItem repository={repository}/>
			</ul>
		</section>
	)
}