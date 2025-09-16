
export function Jobs() {
    const jobs = [
        {
            "img":"images/jobs/google.png",
            "msg":"google",
            "job":"Google as Junior Software Engineer",
            "period":"2019 Oct - Until now"
        },
        {
            "img":"images/jobs/samsung.png",
            "msg":"samsung",
            "job":"Samsung as Junior Software Engineer",
            "period":"2010 Oct - 2019 Oct"
        }
    ]
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