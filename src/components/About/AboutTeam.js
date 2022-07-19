import React from 'react';

// Componentes
import AboutTeamCard from './AboutTeamCard';

// Team avatars
import jobCarreraAvatar from "../../assets/img/team/jobCarreraDiaz.png";
import marielaScheloneAvatar from "../../assets/img/team/marielaSchelone.png";
import pedroSilvestriAvatar from "../../assets/img/team/pedroSilvestri.png";
import pedroNicholsonAvatar from "../../assets/img/team/pedroNicholson.png";
import juanPorrazzoAvatar from "../../assets/img/team/juanPorrazzo.png";

function AboutTeam() {
    const teamList = [
        {
            name: "Job Carrera Diaz",
            function: "Dir. de inmuebles",
            linkedin: "https://www.linkedin.com/in/job-carrera-diaz-3471a325/",
            avatar: jobCarreraAvatar
        },
        {
            name: "Mariela Schenone",
            function: "Dir. de estructuración financiera",
            linkedin: "https://www.linkedin.com/in/mariela-schenone-1890a43/",
            avatar: marielaScheloneAvatar
        },
        {
            name: "Pedro Silvestri",
            function: "Dir. financiero",
            linkedin: "https://www.linkedin.com/in/pedro-silvestri-07300b2a/",
            avatar: pedroSilvestriAvatar
        },
        {
            name: "Pedro Nicholson",
            function: "Dir. de legales",
            linkedin: "https://www.linkedin.com/in/pedro-nicholson-ba737b9/",
            avatar: pedroNicholsonAvatar
        },
        {
            name: "Juan Porrazzo",
            function: "Tech",
            linkedin: "https://www.linkedin.com/in/juan-porrazzo-969b8383/",
            avatar: juanPorrazzoAvatar
        }
    ]
    return (
        <section id="aboutTeam">
            <h2 className='section_subTitle'>Conoce al equipo</h2>
            <ul>
                {teamList.map((teamMember, index) => { return (
                    <AboutTeamCard teamMember={teamMember} key={index} />
                )})}
            </ul>
        </section>
    )
}
export default AboutTeam;