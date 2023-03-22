// Logos
import linkedinLogo from "../../assets/img/icons/aboutLinkedinLogo.svg";

export default function AboutTeamCard({teamMember}) {
    
    return (
            <li className='aboutTeamCard'>
                <div className="aboutTeamImage">
                    <div>
                        <img
                            alt="aboutTeamMemberImg"
                            title="aboutTeamMemberImg"
                            src={teamMember.avatar}
                        />
                    </div>
                </div>
                <div className="aboutTeamInfo">
                    <h3>{teamMember.name}</h3>
                    <p>{teamMember.function}</p>
                    
                    <a 
                        target="_blank"
                        href={teamMember.linkedin}
                        rel="noopener noreferrer"
                        title={teamMember.name + " LinkedIn"}
                    >
                        <div className="aboutTeamlinkedInLogo">
                            <img
                                src={linkedinLogo}
                                alt="linkedInLogo"
                                title="linkedInLogo"
                            />
                        </div>
                    </a>
                </div>
            </li>
    )
}