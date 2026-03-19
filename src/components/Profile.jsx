import styles from './Profile.module.css'

const GITHUB_USERNAME = 'xewi-11'

const SKILL_ICONS = {
  Lenguajes: 'java,kotlin,dotnet,python,js',
  Frontend: 'react,angular,vue,jquery',
  CloudDevOps: 'azure,aws,git,docker,postman',
}

function SkillIcons({ icons }) {
  return (
    <img
      src={`https://skillicons.dev/icons?i=${icons}`}
      alt={icons}
      className={styles.skillIcons}
    />
  )
}

function Badge({ href, src, alt }) {
  const img = <img src={src} alt={alt} className={styles.badge} />
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {img}
    </a>
  ) : (
    img
  )
}

export default function Profile() {
  return (
    <div className={styles.wrapper}>
      {/* Animated header */}
      <img
        src={`https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,2,25,30&height=280&section=header&text=${GITHUB_USERNAME}&fontSize=70&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Desarrollador%20Full%20Stack%20Web%2C%20Multiplataforma%20y%20Cloud&descAlignY=55&descAlign=50`}
        alt="header"
        className={styles.headerImg}
      />

      <div className={styles.content}>
        {/* Social badges */}
        <div className={styles.badges}>
          <Badge
            href="https://www.linkedin.com/"
            src="https://img.shields.io/badge/LinkedIn-Conectar-0A66C2?style=flat&logo=linkedin&logoColor=white"
            alt="LinkedIn"
          />
          <Badge
            src="https://img.shields.io/badge/Gmail-Contactar-EA4335?style=flat&logo=gmail&logoColor=white"
            alt="Gmail"
          />
          <Badge
            href="https://github.com/xewi-11"
            src="https://img.shields.io/badge/Portafolio-Ver%20Proyectos-FF5722?style=flat&logo=google-chrome&logoColor=white"
            alt="Portfolio"
          />
        </div>

        {/* Visitor counter */}
        <div className={styles.visitorCounter}>
          <img
            src={`https://komarev.com/ghpvc/?username=${GITHUB_USERNAME}&label=VISITAS&color=0e75b6&style=for-the-badge`}
            alt="Visitor count"
          />
        </div>

        <hr className={styles.divider} />

        {/* Summary */}
        <section className={styles.section}>
          <h2>🎯 Resumen</h2>
          <p>
            🎓 <strong>Educación Actual:</strong> Máster en Desarrollo Web Full
            Stack y Multicloud en Tajamar.
          </p>
          <p>
            🚀 <strong>Enfoque:</strong> Construcción de soluciones escalables
            con tecnologías modernas de Backend (Java, .NET, Python) y Frontend
            (React, Angular).
          </p>
          <p>
            ☁️ Especializado en aplicaciones web robustas y arquitecturas cloud
            en <strong>Azure y AWS</strong>.
          </p>
        </section>

        <hr className={styles.divider} />

        {/* Tech stack */}
        <section className={styles.section}>
          <h2>🛠️ Stack Tecnológico</h2>

          <h3>Lenguajes</h3>
          <SkillIcons icons={SKILL_ICONS.Lenguajes} />

          <h3>Frontend</h3>
          <SkillIcons icons={SKILL_ICONS.Frontend} />

          <h3>Cloud &amp; DevOps</h3>
          <SkillIcons icons={SKILL_ICONS.CloudDevOps} />

          <h3>Bases de Datos</h3>
          <div className={styles.iconRow}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg"
              alt="SQL Server"
              width="48"
              height="48"
              className={styles.dbIcon}
            />
            <SkillIcons icons="postgres" />
          </div>

          <h3>Herramientas &amp; Low-Code</h3>
          <div className={styles.iconRow}>
            <a
              href="https://www.microsoft.com/power-platform"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Microsoft_Power_Platform_logo.svg/960px-Microsoft_Power_Platform_logo.svg.png"
                alt="Power Platform"
                width="48"
                height="48"
                className={styles.dbIcon}
              />
            </a>
            <SkillIcons icons="vscode,visualstudio,idea" />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dbeaver/dbeaver-original.svg"
              alt="DBeaver"
              width="48"
              height="48"
              className={styles.dbIcon}
            />
          </div>
        </section>

        <hr className={styles.divider} />

        {/* GitHub activity */}
        <section className={styles.section}>
          <h2>📊 Actividad en GitHub</h2>
          <img
            src={`https://nirzak-streak-stats.vercel.app/?user=${GITHUB_USERNAME}&theme=dark&hide_border=false`}
            alt="GitHub streak"
            className={styles.statsImg}
          />
        </section>
      </div>

      {/* Animated footer */}
      <img
        src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,2,25,30&height=100&section=footer"
        alt="footer"
        className={styles.footerImg}
      />
    </div>
  )
}
