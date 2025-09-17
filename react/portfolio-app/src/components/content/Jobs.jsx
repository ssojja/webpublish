
export function Jobs({jobs}) {
    return (
        <>
            <ul className="jobs">
                {jobs && jobs.map((job, index) => 
                    <li className="job" key={index}>
                        <Job img={job.img} 
                            msg={job.msg}
                            job={job.job}
                            period={job.period}/>
                    </li>
                )}
            </ul>
        </>
    );   
}

export function Job({img, msg, job, period}) {
    return (
        <>
            <img src={img} alt={msg} />
            <div>
                <p className="job-name">{job}</p>
                <p className="job-period">{period}</p>
            </div>
        </>
    );   
}