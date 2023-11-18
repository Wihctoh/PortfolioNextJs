import style from "./page.module.scss";
import Image from "next/image";
import avatar from "../../public/avatar.png";
import langIcon from "../../public/lang.svg";
import educIcon from "../../public/educ.svg";
import qrcodeImg from "../../public/qr.png";

export default function Home() {
    const workTitle = [
        {
            jobTitle: "Job title",
            company: "Company",
            timePeriod: "time period",
            describe: "Describe what your job entailed, what you did at your position.",
        },
        {
            jobTitle: "Job title",
            company: "Company",
            timePeriod: "time period",
            describe: "Describe what your job entailed, what you did at your position.",
        },
        {
            jobTitle: "Job title",
            company: "Company",
            timePeriod: "time period",
            describe: "Describe what your job entailed, what you did at your position.",
        },
        {
            jobTitle: "Job title",
            company: "Company",
            timePeriod: "time period",
            describe: "Describe what your job entailed, what you did at your position.",
        },
    ];
    const skills = [
        "Wireframing",
        "Prototyping",
        "Mobile Application Design",
        "Responsive Web Design",
        "Auto Layout",
        "Smart animate",
        "Presentation design",
        "Work with design systems",
    ];

    return (
        <div className={style.wrapper}>
            <main className={style.mainWrapper}>
                <div className={style.main}>
                    <div className={style.titleWrapper}>
                        <div className={style.titlePhoto}>
                            <Image src={avatar} alt='avatar' />
                        </div>

                        <div className={style.titleDescription}>
                            <h1>Your name</h1>

                            <div className={style.describeInfo}>
                                <p>
                                    <span>Based</span>
                                    Czech Republic
                                </p>
                                <p>
                                    <span>Phone</span>
                                    +420 000 000 000
                                </p>
                                <p>
                                    <span>E-mail</span>
                                    E-mail pash.bel@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className={style.experience}>Work Experience</div>

            <section className={style.jobTitleWrapper}>
                {workTitle.map((el, index) => (
                    <div className={style.jobTitle} key={index}>
                        <h3>{el.jobTitle}</h3>

                        <p>{el.company}</p>
                        <p>{el.timePeriod}</p>
                        <p>{el.describe}</p>
                    </div>
                ))}
            </section>

            <div className={style.skillsTitle}>skills</div>

            <section className={style.skillWrapper}>
                {skills.map((el, index) => (
                    <div className={style.skill} key={index}>
                        <p>{el}</p>
                    </div>
                ))}
            </section>

            <section className={style.educationWrapper}>
                <div className={style.education}>
                    <div className={style.educationBlock}>
                        <Image src={educIcon} alt='educIcon' />

                        <div className={style.educationDesc}>
                            <p>Education</p>
                            <p>1. test 1</p>
                            <p>2. test 1</p>
                        </div>
                    </div>

                    <div className={style.langBlock}>
                        <Image src={langIcon} alt='langIcon' />

                        <div className={style.langDesc}>
                            <p>English B1</p>
                            <p>English B1</p>
                            <p>English B1</p>
                            <p>English B1</p>
                        </div>
                    </div>
                </div>

                <div className={style.qrcodeWrapper}>
                    <div className={style.qrcode}>
                        <Image src={qrcodeImg} alt='qrcode' />

                        <div className={style.qrcodeDescription}>
                            <h2>my portfolio on Dribble</h2>
                            <p>dribbble.com/pashbe</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
