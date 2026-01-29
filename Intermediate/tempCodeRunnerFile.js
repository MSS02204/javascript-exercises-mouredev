        //Obtener la especie del pókemon
        const specieResponse = await fetch(data.species.url)
        
        if(!specieResponse.ok) {
            throw new Error("Error en la petición: " + specieResponse.status)
        }

        const specieData = await specieResponse.json()
        console.log("\nDetalles de la especie: ", specieData)

        //Obtener la cadena evolutiva de la especie
        const evolutionChainResponse = await fetch(specieData.evolution_chain.url)

        if(!evolutionChainResponse.ok) {
            throw new Error("Error en la petición: " + evolutionChainResponse.status)
        }

        const evolutionData = await evolutionChainResponse.json()
        console.log("\nDatos de la Cadena evolutiva: ", evolutionData)
