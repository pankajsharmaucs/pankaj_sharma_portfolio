
const skills = {
  Frontend: [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  ],
  Backend: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "REST APIs", icon: "https://img.icons8.com/ios-filled/50/000000/api-settings.png" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ],
  DevOps: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
    { name: "CI/CD", icon: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-cicd-devops-flatart-icons-outline-flatarticons.png" },
  ],
};

const Skills = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold display-6 text-center">Skills</h2>

      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="mb-5">
          <h4 className="mb-3">{category}</h4>
          <div className="row g-3">
            {skillList.map((skill) => (
              <div key={skill.name} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="card text-center h-100 p-2">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="mx-auto"
                    style={{ height: "40px", objectFit: "contain" }}
                  />
                  <div className="card-body p-2">
                    <p className="card-text small mb-0">{skill.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
