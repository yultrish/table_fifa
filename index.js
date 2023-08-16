window.addEventListener('load', ()=>{
    tableContainer = document.querySelector('.table-container')

 fifa2023 = (teams)=>{
    setTimeout(()=>{
        teams(
           fifa = [
        {Ranks:1, Teams:'Brazil', totalPoint:1.841, Rank:16, Team:'Uruguay', totalPoints:1.627},
        {Ranks:2, Teams:'Argentina', totalPoint:1.83, Rank:17, Team:'Seraleon', totalPoints:1.5},
        {Ranks:3, Teams:'Morroco', totalPoint:1.821, Rank:18, Team:'Ghana', totalPoints:1.45},
            ]
        )
    }, 5000)

} 



fifa2023(records=>{
         tableContents = `
      <table>
        <thead>
            <tr>
                <th>Rank</th>
                <th>Team</th>
                <th>totalPoints</th>
                <th>Rank</th>
                 <th>Team</th>
                  <th>totalPoints</th>
            </tr>
        </thead>
        <tbody>`
    records.forEach(record => {    
      tableContents += `
            <tr>
                <td data-label="Rank">${record.Ranks}</td>
                <td data-label="Team">${record.Teams}</td>
                <td data-label="Total Points">${record.totalPoint}</td>
                <td data-label="Rank">${record.Rank}</td>
                <td data-label="Team">${record.Team}</td>
                <td data-label="Total Points">${record.totalPoints}</td>
            </tr>          
     ` 
       
    });
       tableContents += `
     </table>
     </tbody>
`
    tableContainer.innerHTML = tableContents
})
})

