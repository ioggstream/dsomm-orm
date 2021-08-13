{
  "data": {
    "activities": [
      {
        "data": "{'meta': {'implementationGuide': 'Depending on your environment, usage of virtual machines or container technology is a good way. After the build, the filesystem should not be used again in other builds.'}, 'risk': ['While building and testing artifacts, third party systems, application frameworks\\nand 3rd party libraries are used. These might be malicious as a result of\\nvulnerable libraries or because they are altered during the delivery phase.'], 'measure': 'Each step during within the build and testing phase is performed in a separate virtual environments, which is destroyed afterward.', 'usefulness': 2, 'description': 'While building and testing artifacts, third party systems, application frameworks\\nand 3rd party libraries are used. These might be malicious as a result of\\nvulnerable libraries or because they are altered during the delivery phase.', 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 2}}",
        "done": 1,
        "implementation": [
          {
            "name": "ci-cd-tools",
            "topics": [],
            "url": "",
            "tags": [
              "ci-cd"
            ]
          },
          {
            "name": "container-technologi",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 43,
            "practice": "Secure Build",
            "stream": "Build Process",
            "function": "Implementation",
            "id": "I-SB-2-A"
          }
        ],
        "dimension": "Build and Deployment",
        "level": "2",
        "name": "Building and testing of artifacts in virtual environments",
        "references": [
          {
            "name": "samm2:I-SB-2-A"
          },
          {
            "name": "iso27001-2017:iso27001-2017:14.2.6"
          }
        ],
        "subdimension": "Build"
      },
      {
        "data": "{'risk': ['Performing builds without a defined process is error prone; for example, as a result of incorrect security related configuration.'], 'measure': 'A well defined build process lowers the possibility of errors during the build process.', 'evidence': 'The build process is defined in <a href=\"REPLACE-ME\">REPLACE-ME Pipeline</a> in the folder <i>vars</>. Projects are using a <i>Jenkinsfile</i> to use the defined process.', 'usefulness': 4, 'difficultyOfImplementation': {'time': 3, 'knowledge': 2, 'resources': 2}}",
        "done": 1,
        "implementation": [
          {
            "name": "ci-cd-tools",
            "topics": [],
            "url": "",
            "tags": [
              "ci-cd"
            ]
          },
          {
            "name": "container-technologi",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 33,
            "practice": "Secure Build",
            "stream": "Build Process",
            "function": "Implementation",
            "id": "I-SB-1-A"
          }
        ],
        "dimension": "Build and Deployment",
        "level": "1",
        "name": "Defined build process",
        "references": [
          {
            "name": "samm2:I-SB-1-A"
          },
          {
            "name": "iso27001-2017:12.1.1"
          },
          {
            "name": "iso27001-2017:14.2.2"
          }
        ],
        "subdimension": "Build"
      },
      {
        "data": "{'risk': ['Unauthorized manipulation of artifacts might be difficult to spot. For example, this may result in images with malicious code in the Docker registry.'], 'measure': 'Digitally signing artifacts for all steps during the build and especially docker images, helps to ensure their integrity.', 'dependsOn': ['Defined build process'], 'usefulness': 4, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 2}}",
        "done": 1,
        "implementation": [
          {
            "name": "docker-content-trust",
            "topics": [],
            "url": "https://docs.docker.com/notary/getting_started/",
            "tags": []
          },
          {
            "name": "in-toto",
            "topics": [],
            "url": "https://in-toto.github.io/",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 33,
            "practice": "Secure Build",
            "stream": "Build Process",
            "function": "Implementation",
            "id": "I-SB-1-A"
          }
        ],
        "dimension": "Build and Deployment",
        "level": "3",
        "name": "Signing of artifacts",
        "references": [
          {
            "name": "samm2:I-SB-1-A"
          },
          {
            "name": "iso27001-2017:14.2.6"
          }
        ],
        "subdimension": "Build"
      },
      {
        "data": "{'risk': ['Unauthorized manipulation of source code might be difficult to spot.'], 'measure': 'Digitally signing commits helps to prevent unauthorized manipulation of source code.', 'dependsOn': ['Defined build process'], 'usefulness': 3, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 2}}",
        "done": 1,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 43,
            "practice": "Secure Build",
            "stream": "Build Process",
            "function": "Implementation",
            "id": "I-SB-2-A"
          }
        ],
        "dimension": "Build and Deployment",
        "level": "3",
        "name": "Signing of code",
        "references": [
          {
            "name": "samm2:I-SB-2-A"
          },
          {
            "name": "iso27001-2017:14.2.6"
          }
        ],
        "subdimension": "Build"
      },
      {
        "data": "{'risk': ['If errors are experienced during the deployment process you want to deploy an old release. However, due to changes in the database this is often unfeasible.'], 'measure': 'Performing automated periodical backups are used. Backup before deployment can help facilitate deployments whilst testing the backup restore processes.', 'dependsOn': ['Defined deployment process'], 'usefulness': 4, 'difficultyOfImplementation': {'time': 2, 'knowledge': 1, 'resources': 1}}",
        "done": 1,
        "implementation": [
          {
            "name": "a-complete-backup-of",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "a-point-in-time-reco",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 8,
            "practice": "Operational Management",
            "stream": "Data Protection",
            "function": "Operations",
            "id": "O-OM-1-A"
          }
        ],
        "dimension": "Build and Deployment",
        "level": "2",
        "name": "Backup",
        "references": [
          {
            "name": "samm2:O-OM-1-A"
          },
          {
            "name": "iso27001-2017:12.3"
          },
          {
            "name": "iso27001-2017:14.2.6"
          }
        ],
        "subdimension": "Deployment"
      },
      {
        "data": "{'risk': ['A new artifacts version can have unknown defects.'], 'measure': 'By having multiple production environments, a deployment can be performant on the first environment to spot possible defects before it is deployment in the production environment(s)', 'dependsOn': ['Smoke Test'], 'usefulness': 2, 'difficultyOfImplementation': {'time': 2, 'knowledge': 1, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "blue-green-deploymen",
            "topics": [],
            "url": "https://martinfowler.com/bliki/BlueGreenDeployment.html",
            "tags": []
          }
        ],
        "samm2": [],
        "dimension": "Build and Deployment",
        "level": "4",
        "name": "Blue/Green Deployment",
        "references": [
          {
            "name": "samm2:TODO"
          },
          {
            "name": "iso27001-2017:17.2.1"
          },
          {
            "name": "iso27001-2017:12.1.1"
          },
          {
            "name": "iso27001-2017:12.1.2"
          },
          {
            "name": "iso27001-2017:12.1.4"
          },
          {
            "name": "iso27001-2017:12.5.1"
          },
          {
            "name": "iso27001-2017:14.2.9"
          }
        ],
        "subdimension": "Deployment"
      },
      {
        "data": "{'risk': ['Deployments without a defined process are error prone thus allowing old or untested artifact to be deployed.'], 'measure': 'A defined deployment process significantly lowers the likelihood of errors during the deployment phase.', 'usefulness': 4, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 1}}",
        "done": 1,
        "implementation": [
          {
            "name": "ci-cd-tools",
            "topics": [],
            "url": "",
            "tags": [
              "ci-cd"
            ]
          },
          {
            "name": "docker",
            "topics": [],
            "url": "https://github.com/moby/moby",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 0,
            "practice": "Secure Deployment",
            "stream": "Deployment Process",
            "function": "Implementation",
            "id": "I-SD-1-A"
          }
        ],
        "dimension": "Build and Deployment",
        "level": "1",
        "name": "Defined deployment process",
        "references": [
          {
            "name": "samm2:I-SD-1-A"
          },
          {
            "name": "iso27001-2017:12.1.1"
          },
          {
            "name": "iso27001-2017:14.2.2"
          }
        ],
        "subdimension": "Deployment"
      },
      {
        "data": "{'risk': ['Attackers who compromise a system can see confidential access information like database credentials.', 'Parameters are often used to set credentials, for example by starting containers or applications; these parameters can often be seen by any one listing running processes on the target system.'], 'measure': 'Configuration parameters are set for each environment not in the source code.\\nBy using encryption, it is harder to read credentials , e.g. from the file system. Also, the usage of a credential management system can help protect credentials.\\n', 'usefulness': 4, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "1",
            "index": 72,
            "practice": "Secure Deployment",
            "stream": "Secret Management",
            "function": "Implementation",
            "id": "I-SD-1-B"
          }
        ],
        "dimension": "Build and Deployment",
        "level": "2",
        "name": "Environment depending configuration parameters (secrets)",
        "references": [
          {
            "name": "samm2:I-SD-1-B"
          },
          {
            "name": "iso27001-2017:9.4.5"
          },
          {
            "name": "iso27001-2017:14.2.6"
          }
        ],
        "subdimension": "Deployment"
      },
      {
        "data": "{'risk': ['Attackers who compromise a system can see confidential access information like database credentials.', 'Parameters are often used to set credentials, for example by starting containers or applications; these parameters can often be seen by any one listing running processes on the target system.'], 'measure': 'By using encryption, it is harder to read credentials , e.g. from the file system. Also, the usage of a credential management system can help protect credentials.', 'dependsOn': ['Environment depending configuration parameters (secrets)'], 'usefulness': 4, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 4,
            "practice": "Secure Deployment",
            "stream": "Secret Management",
            "function": "Implementation",
            "id": "I-SD-2-B"
          }
        ],
        "dimension": "Build and Deployment",
        "level": "3",
        "name": "Handover of confidential parameters",
        "references": [
          {
            "name": "samm2:I-SD-2-B"
          },
          {
            "name": "iso27001-2017:14.1.3"
          },
          {
            "name": "iso27001-2017:13.1.3"
          },
          {
            "name": "iso27001-2017:9.4.3"
          },
          {
            "name": "iso27001-2017:9.4.1"
          },
          {
            "name": "iso27001-2017:10.1.2"
          }
        ],
        "subdimension": "Deployment"
      },
      {
        "data": "{'risk': ['In case a vulnerability of severity high or critical exists, it needs to be known where an artifacts with that vulnerability is deployed with which dependencies.'], 'measure': 'A documented inventory or a possibility to gather the needed information (e.g. the documentation of which script needs to be run by whom) must be in place.', 'dependsOn': ['Defined deployment process'], 'usefulness': 3, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 3}}",
        "done": 0,
        "implementation": [],
        "samm2": [],
        "dimension": "Build and Deployment",
        "level": "3",
        "name": "Inventory of running artifacts",
        "references": [
          {
            "name": "samm2:o-incident-management|TODO"
          },
          {
            "name": "iso27001-2017:8.1"
          },
          {
            "name": "iso27001-2017:8.2"
          }
        ],
        "subdimension": "Deployment"
      },
      {
        "data": "{'risk': ['While a deployment is performed, the application can not be reached.'], 'measure': 'A deployment without downtime is performed*.', 'dependsOn': ['Defined deployment process'], 'usefulness': 2, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 2}}",
        "done": 1,
        "implementation": [
          {
            "name": "docker",
            "topics": [],
            "url": "https://github.com/moby/moby",
            "tags": []
          },
          {
            "name": "rolling-update",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "webserver",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 0,
            "practice": "Secure Deployment",
            "stream": "Deployment Process",
            "function": "Implementation",
            "id": "I-SD-1-A"
          }
        ],
        "dimension": "Build and Deployment",
        "level": "3",
        "name": "Rolling update on deployment",
        "references": [
          {
            "name": "samm2:I-SD-1-A"
          },
          {
            "name": "iso27001-2017:12.5.1"
          },
          {
            "name": "iso27001-2017:14.2.2"
          },
          {
            "name": "iso27001-2017:17.2.1"
          }
        ],
        "subdimension": "Deployment"
      },
      {
        "data": "{'risk': ['Building of an artifact for different environments means that an untested artifact might reach the production environment.'], 'measure': 'Building an artifact once and deploying it to different environments means that only tested artifacts are allowed to reach the production environment', 'dependsOn': ['Defined build process'], 'usefulness': 4, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "docker",
            "topics": [],
            "url": "https://github.com/moby/moby",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 52,
            "practice": "Secure Deployment",
            "stream": "Deployment Process",
            "function": "Implementation",
            "id": "I-SD-2-A"
          }
        ],
        "dimension": "Build and Deployment",
        "level": "3",
        "name": "Same artifact for environments",
        "references": [
          {
            "name": "samm2:I-SD-2-A"
          },
          {
            "name": "iso27001-2017:14.3.1"
          },
          {
            "name": "iso27001-2017:14.2.8"
          },
          {
            "name": "iso27001-2017:12.1.4"
          }
        ],
        "subdimension": "Deployment"
      },
      {
        "data": "{'risk': [\"By using environment dependent configuration, some parameters will not be tested correctly. i.e. <pre>if (host == 'production') {} else {}</pre>\"], 'measure': 'Usage of environment independent configuration parameter, called feature toggles, helps to enhance the test coverage. Only what has been tested, goes to production.', 'dependsOn': ['Same artifact for environments'], 'usefulness': 2, 'difficultyOfImplementation': {'time': 1, 'knowledge': 2, 'resources': 1}}",
        "done": 1,
        "implementation": [
          {
            "name": "docker",
            "topics": [],
            "url": "https://github.com/moby/moby",
            "tags": []
          }
        ],
        "samm2": [],
        "dimension": "Build and Deployment",
        "level": "3",
        "name": "Usage of feature toggles",
        "references": [
          {
            "name": "iso27001-2017:14.3.1"
          },
          {
            "name": "iso27001-2017:14.2.8"
          },
          {
            "name": "iso27001-2017:14.2.9"
          },
          {
            "name": "iso27001-2017:12.1.4"
          }
        ],
        "subdimension": "Deployment"
      },
      {
        "data": "{'risk': ['Developers or operations might start random images in the production cluster which have malicious code or known vulnerabilities.'], 'measure': 'Create image assessment criteria, perform an evaluation of images and create a whitelist of artifacts/container images/virtual machine images.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 1, 'knowledge': 1, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "kubernetes-admission",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 52,
            "practice": "Secure Deployment",
            "stream": "Deployment Process",
            "function": "Implementation",
            "id": "I-SD-2-A"
          }
        ],
        "dimension": "Build and Deployment",
        "level": "2",
        "name": "Usage of trusted images",
        "references": [
          {
            "name": "samm2:I-SD-2-A"
          },
          {
            "name": "iso27001-2017:15.1.1"
          },
          {
            "name": "iso27001-2017:15.1.2"
          },
          {
            "name": "iso27001-2017:15.1.3"
          },
          {
            "name": "iso27001-2017:14.1.3"
          }
        ],
        "subdimension": "Deployment"
      },
      {
        "data": "{'risk': ['Vulnerabilities in running containers stay for long and might get exploited.'], 'measure': 'A patch policy for all artifacts (e.g. in images) is defined. How often is an image rebuilt?', 'usefulness': 4, 'difficultyOfImplementation': {'time': 1, 'knowledge': 3, 'resources': 2}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "1",
            "index": 89,
            "practice": "Environment Management",
            "stream": "Patching and Updating",
            "function": "Operations",
            "id": "O-EM-1-B"
          }
        ],
        "dimension": "Build and Deployment",
        "level": "1",
        "name": "A patch policy is defined",
        "references": [
          {
            "name": "samm2:O-EM-1-B"
          },
          {
            "name": "iso27001-2017:12.6.1"
          },
          {
            "name": "iso27001-2017:12.5.1"
          },
          {
            "name": "iso27001-2017:14.2.5"
          }
        ],
        "subdimension": "Patch Management"
      },
      {
        "data": "{'risk': ['Known vulnerabilities components might stay for long and get exploited, even when a patch is available.'], 'measure': 'Fast patching of third party component is needed. The DevOps way is to have an automated pull request for new components. This includes <ul> <li>Applications</li><li>Virtualized operating system components (e.g. container images)</li> <li>Operating Systems</li><li>Infrastructure as Code/GitOps (e.g. argocd)</li> </ul>', 'usefulness': 5, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "dependabot",
            "topics": [],
            "url": "https://dependabot.com/",
            "tags": []
          },
          {
            "name": "jenkins",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 89,
            "practice": "Environment Management",
            "stream": "Patching and Updating",
            "function": "Operations",
            "id": "O-EM-1-B"
          }
        ],
        "dimension": "Build and Deployment",
        "level": "1",
        "name": "Automated PRs for patches",
        "references": [
          {
            "name": "samm2:O-EM-1-B"
          },
          {
            "name": "iso27001-2017:12.6.1"
          },
          {
            "name": "iso27001-2017:14.2.5"
          }
        ],
        "subdimension": "Patch Management"
      },
      {
        "data": "{'risk': ['Vulnerabilities in running containers stay for too long and might get exploited.'], 'measure': 'Custom base images are getting build at least nightly. In case the packages in the base image e.g. <i>centos</i> has changed, the build server triggers the build of depending images.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 2, 'knowledge': 3, 'resources': 2}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "1",
            "index": 89,
            "practice": "Environment Management",
            "stream": "Patching and Updating",
            "function": "Operations",
            "id": "O-EM-1-B"
          }
        ],
        "dimension": "Build and Deployment",
        "level": "2",
        "name": "Nightly build of images (base images)",
        "references": [
          {
            "name": "samm2:O-EM-1-B"
          },
          {
            "name": "iso27001-2017:12.6.1"
          }
        ],
        "subdimension": "Patch Management"
      },
      {
        "data": "{'risk': ['Components, dependencies, files or file access rights might have vulnerabilities, but the they are not needed.'], 'measure': 'Removal of unneeded components, dependencies, files or file access rights. For container images the usage of distroless images is recommended.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "distroless",
            "topics": [],
            "url": "https://github.com/GoogleContainerTools/distroless",
            "tags": []
          },
          {
            "name": "fedora-coreos",
            "topics": [],
            "url": "https://getfedora.org/coreos",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 89,
            "practice": "Environment Management",
            "stream": "Patching and Updating",
            "function": "Operations",
            "id": "O-EM-1-B"
          }
        ],
        "dimension": "Build and Deployment",
        "level": "2",
        "name": "Reduction of the attack surface",
        "references": [
          {
            "name": "samm2:O-EM-1-B"
          },
          {
            "name": "iso27001-2017:hardening is missing in ISO 27001"
          },
          {
            "name": "iso27001-2017:14.2.1"
          }
        ],
        "subdimension": "Patch Management"
      },
      {
        "data": "{'risk': ['Vulnerabilities in images of running containers stay for too long and might get exploited. Long running containers have potential memory leaks. A compromised container might get killed by restarting the container (e.g. in case the attacker has not reached the persistence layer).'], 'measure': 'A short maximum lifetime for images is defined, e.g. 30 days. The project images, based on the nightly builded images, are deployed at leased once within the defined lifetime. Third Party images are deployed at leased once within the defined lifetime.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 4, 'knowledge': 3, 'resources': 2}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "1",
            "index": 89,
            "practice": "Environment Management",
            "stream": "Patching and Updating",
            "function": "Operations",
            "id": "O-EM-1-B"
          }
        ],
        "dimension": "Build and Deployment",
        "level": "2",
        "name": "Usage of a maximum lifetime for images",
        "references": [
          {
            "name": "samm2:O-EM-1-B"
          },
          {
            "name": "iso27001-2017:12.6.1"
          }
        ],
        "subdimension": "Patch Management"
      },
      {
        "data": "{'risk': ['Vulnerabilities in running containers stay for too long and might get exploited.'], 'measure': 'A good practice is to perform the build and deployment daily or even just-in-time, when a new component (e.g. package) for the image is available.\\n', 'usefulness': 3, 'difficultyOfImplementation': {'time': 4, 'knowledge': 3, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "sample-concept-1",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 89,
            "practice": "Environment Management",
            "stream": "Patching and Updating",
            "function": "Operations",
            "id": "O-EM-1-B"
          }
        ],
        "dimension": "Build and Deployment",
        "level": "4",
        "name": "Usage of a short maximum lifetime for images",
        "references": [
          {
            "name": "samm2:O-EM-1-B"
          },
          {
            "name": "iso27001-2017:12.6.1"
          }
        ],
        "subdimension": "Patch Management"
      },
      {
        "data": "{'risk': ['Inadequate identification of business and technical risks.'], 'measure': 'Threat modeling is performed by using reviewing user stories and producing security driven data flow diagrams.', 'dependsOn': ['Conduction of simple threat modeling on technical level', 'Creation of threat modeling processes and standards'], 'usefulness': 3, 'md-description': '**Example High Maturity Scenario:**\\n\\nBased on a detailed threat model defined and updated through code, the team decides the following:\\n\\n* Local encrypted caches need to expire and auto-purged.\\n* Communication channels encrypted and authenticated.\\n* All secrets persisted in shared secrets store.\\n* Frontend designed with permissions model integration.\\n* Permissions matrix defined.\\n* Input is escaped output is encoded appropriately using well established libraries.\\n\\nSource: OWASP Project Integration Project\\n', 'difficultyOfImplementation': {'time': 3, 'knowledge': 4, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "draw-io",
            "topics": [],
            "url": "https://github.com/jgraph/drawio-desktop",
            "tags": [
              "defender",
              "threat-modeling",
              "whiteboard"
            ]
          },
          {
            "name": "miro-or-any-other-c",
            "topics": [],
            "url": "https://miro.com/",
            "tags": [
              "defender",
              "threat-modeling",
              "collaboration",
              "whiteboard"
            ]
          },
          {
            "name": "owasp-samm",
            "topics": [],
            "url": "https://owaspsamm.org/model/design/threat-assessment/stream-b/",
            "tags": [
              "threat-modeling",
              "owasp",
              "defender"
            ]
          },
          {
            "name": "threagile",
            "topics": [],
            "url": "https://github.com/Threagile/threagile",
            "tags": [
              "threat-modeling"
            ]
          },
          {
            "name": "threat-modeling-play",
            "topics": [],
            "url": "https://github.com/Toreon/threat-model-playbook",
            "tags": [
              "owasp",
              "defender",
              "threat-modeling",
              "whiteboard"
            ]
          },
          {
            "name": "whiteboard",
            "topics": [],
            "url": "https://en.wikipedia.org/wiki/Whiteboard",
            "tags": [
              "defender",
              "threat-modeling",
              "collaboration",
              "whiteboard"
            ]
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 85,
            "practice": "Threat Assessment",
            "stream": "Threat Modeling",
            "function": "Design",
            "id": "D-TA-2-B"
          }
        ],
        "dimension": "Culture and Organization",
        "level": "3",
        "name": "Conduction of advanced threat modeling",
        "references": [
          {
            "name": "samm2:D-TA-2-B"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001"
          },
          {
            "name": "iso27001-2017:may be part of risk assessment"
          },
          {
            "name": "iso27001-2017:8.2.1"
          },
          {
            "name": "iso27001-2017:14.2.1"
          }
        ],
        "subdimension": "Design"
      },
      {
        "data": "{'risk': ['Business related threats are discovered too late in the development and deployment process.'], 'measure': 'Threat modeling of business functionality is performed during the product backlog creation to facilitate early detection of security defects.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 3, 'knowledge': 2, 'resources': 1}}",
        "done": 1,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 85,
            "practice": "Threat Assessment",
            "stream": "Threat Modeling",
            "function": "Design",
            "id": "D-TA-2-B"
          }
        ],
        "dimension": "Culture and Organization",
        "level": "3",
        "name": "Conduction of simple threat modeling on business level",
        "references": [
          {
            "name": "samm2:D-TA-2-B"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001"
          },
          {
            "name": "iso27001-2017:may be part of risk assessment"
          },
          {
            "name": "iso27001-2017:8.2.1"
          },
          {
            "name": "iso27001-2017:14.2.1"
          }
        ],
        "subdimension": "Design"
      },
      {
        "data": "{'risk': ['Technical related threats are discovered too late in the development and deployment process.'], 'measure': 'Threat modeling of technical features is performed during the product sprint planning.', 'usefulness': 3, 'md-description': '# OWASP SAMM Description\\nThreat modeling is a structured activity for identifying, evaluating, and managing system threats, architectural design flaws, and recommended security mitigations. It is typically done as part of the design phase or as part of a security assessment.\\n\\nThreat modeling is a team exercise, including product owners, architects, security champions, and security testers. At this maturity level, expose teams and stakeholders to threat modeling to increase security awareness and to create a shared vision on the security of the system.\\n\\nAt maturity level 1, you perform threat modeling ad-hoc for high-risk applications and use simple threat checklists, such as STRIDE. Avoid lengthy workshops and overly detailed lists of low-relevant threats. Perform threat modeling iteratively to align to more iterative development paradigms. If you add new functionality to an existing application, look only into the newly added functions instead of trying to cover the entire scope. A good starting point is the existing diagrams that you annotate during discussion workshops. Always make sure to persist the outcome of a threat modeling discussion for later use.\\n\\nYour most important tool to start threat modeling is a whiteboard, smartboard, or a piece of paper. Aim for security awareness, a simple process, and actionable outcomes that you agree upon with your team.      Once requirements are gathered and analysis is performed, implementation specifics need to be defined. The outcome of this stage is usually a diagram outlining data flows and a general system architecture. This presents an opportunity for both threat modeling and attaching security considerations to every ticket and epic that is the outcome of this stage.\\n\\nSource: https://owaspsamm.org/model/design/threat-assessment/stream-b/\\n# OWASP Project Integration Description\\nThere is some great advice on threat modeling out there *e.g.* [this](https://arstechnica.com/information-technology/2017/07/how-i-learned-to-stop-worrying-mostly-and-love-my-threat-model/) article or [this](https://www.microsoft.com/en-us/securityengineering/sdl/threatmodeling) one.\\n\\nA bite sized primer by Adam Shostack himself can be found [here](https://adam.shostack.org/blog/2018/03/threat-modeling-panel-at-appsec-cali-2018/).\\n\\nOWASP includes a short [article](https://wiki.owasp.org/index.php/Category:Threat_Modeling) on Threat Modeling along with a relevant [Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html). Moreover, if you\\'re following OWASP SAMM, it has a short section on [Threat Assessment](https://owaspsamm.org/model/design/threat-assessment/).\\n\\nThere\\'s a few projects that can help with creating Threat Models at this stage, [PyTM](https://github.com/izar/pytm) is one, [ThreatSpec](https://github.com/threatspec/threatspec) is another.\\n\\n> Note: _A threat model can be as simple as a data flow diagram with attack vectors on every flow and asset and equivalent remediations. An example can be found below._\\n\\n![Threat Model](https://github.com/OWASP/www-project-integration-standards/raw/master/writeups/owasp_in_sdlc/images/threat_model.png \"Threat Model\")\\n\\nLast, if the organizations maps Features to Epics, the Security Knowledge Framework (SKF) can be used to facilitate this process by leveraging it\\'s questionnaire function.\\n\\n![SKF](https://github.com/OWASP/www-project-integration-standards/raw/master/writeups/owasp_in_sdlc/images/skf_qs.png \"SKF\")\\n\\nThis practice has the side effect that it trains non-security specialists to think like attackers.\\n\\nThe outcomes of this stage should help lay the foundation of secure design and considerations.\\n\\n**Example Low Maturity Scenario:**\\n\\nFollowing vague feature requirements the design includes caching data to a local unencrypted database with a hardcoded password.\\n\\nRemote data store access secrets are hardcoded in the configuration files. All communication between backend systems is plaintext.\\n\\nFrontend serves data over GraphQL as a thin layer between caching system and end user.\\n\\nGraphQL queries are dynamically translated to SQL, Elasticsearch and NoSQL queries. Access to data is protected with basic auth set to _1234:1234_ for development purposes.\\n\\nSource: OWASP Project Integration Project\\n', 'difficultyOfImplementation': {'time': 3, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "draw-io",
            "topics": [],
            "url": "https://github.com/jgraph/drawio-desktop",
            "tags": [
              "defender",
              "threat-modeling",
              "whiteboard"
            ]
          },
          {
            "name": "miro-or-any-other-c",
            "topics": [],
            "url": "https://miro.com/",
            "tags": [
              "defender",
              "threat-modeling",
              "collaboration",
              "whiteboard"
            ]
          },
          {
            "name": "owasp-samm",
            "topics": [],
            "url": "https://owaspsamm.org/model/design/threat-assessment/stream-b/",
            "tags": [
              "threat-modeling",
              "owasp",
              "defender"
            ]
          },
          {
            "name": "threat-modeling-play",
            "topics": [],
            "url": "https://github.com/Toreon/threat-model-playbook",
            "tags": [
              "owasp",
              "defender",
              "threat-modeling",
              "whiteboard"
            ]
          },
          {
            "name": "whiteboard",
            "topics": [],
            "url": "https://en.wikipedia.org/wiki/Whiteboard",
            "tags": [
              "defender",
              "threat-modeling",
              "collaboration",
              "whiteboard"
            ]
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 85,
            "practice": "Threat Assessment",
            "stream": "Threat Modeling",
            "function": "Design",
            "id": "D-TA-2-B"
          }
        ],
        "dimension": "Culture and Organization",
        "level": "1",
        "name": "Conduction of simple threat modeling on technical level",
        "references": [
          {
            "name": "samm2:D-TA-2-B"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001"
          },
          {
            "name": "iso27001-2017:may be part of risk assessment"
          },
          {
            "name": "iso27001-2017:8.2.1"
          },
          {
            "name": "iso27001-2017:14.2.1"
          }
        ],
        "subdimension": "Design"
      },
      {
        "data": "{'risk': ['Simple user stories are not going deep enough. Relevant security considerations are performed. Security flaws are discovered too late in the development and deployment process'], 'measure': 'Advanced abuse stories are created as part of threat modeling activities.', 'dependsOn': ['Creation of simple abuse stories'], 'usefulness': 4, 'difficultyOfImplementation': {'time': 2, 'knowledge': 4, 'resources': 1}}",
        "done": 1,
        "implementation": [
          {
            "name": "don-t-forget-evil-u",
            "topics": [],
            "url": "https://www.owasp.org/index.php/Agile_Software_Development",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 85,
            "practice": "Threat Assessment",
            "stream": "Threat Modeling",
            "function": "Design",
            "id": "D-TA-2-B"
          }
        ],
        "dimension": "Culture and Organization",
        "level": "4",
        "name": "Creation of advanced abuse stories",
        "references": [
          {
            "name": "samm2:D-TA-2-B"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001"
          },
          {
            "name": "iso27001-2017:may be part of project management"
          },
          {
            "name": "iso27001-2017:6.1.5"
          },
          {
            "name": "iso27001-2017:may be part of risk assessment"
          },
          {
            "name": "iso27001-2017:8.1.2"
          }
        ],
        "subdimension": "Design"
      },
      {
        "data": "{'risk': [\"User stories mostly don't consider security implications. Security flaws are discovered too late in the development and deployment process.\"], 'measure': 'Abuse stories are created during the creation of user stories.', 'dependsOn': ['Conduction of simple threat modeling on technical level', 'Creation of threat modeling processes and standards'], 'usefulness': 4, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "don-t-forget-evil-u",
            "topics": [],
            "url": "https://www.owasp.org/index.php/Agile_Software_Development",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 85,
            "practice": "Threat Assessment",
            "stream": "Threat Modeling",
            "function": "Design",
            "id": "D-TA-2-B"
          }
        ],
        "dimension": "Culture and Organization",
        "level": "3",
        "name": "Creation of simple abuse stories",
        "references": [
          {
            "name": "samm2:D-TA-2-B"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001"
          },
          {
            "name": "iso27001-2017:may be part of project management"
          },
          {
            "name": "iso27001-2017:6.1.5"
          },
          {
            "name": "iso27001-2017:may be part of risk assessment"
          },
          {
            "name": "iso27001-2017:8.1.2"
          }
        ],
        "subdimension": "Design"
      },
      {
        "data": "{'risk': ['Inadequate identification of business and technical risks.'], 'measure': 'Creation of threat modeling processes and standards through the organization helps to enhance the security culture and provide more structure to the threat modelings.', 'dependsOn': ['Conduction of simple threat modeling on technical level'], 'usefulness': 3, 'md-description': '', 'difficultyOfImplementation': {'time': 3, 'knowledge': 4, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "owasp-samm",
            "topics": [],
            "url": "https://owaspsamm.org/model/design/threat-assessment/stream-b/",
            "tags": [
              "threat-modeling",
              "owasp",
              "defender"
            ]
          },
          {
            "name": "threat-modeling-play",
            "topics": [],
            "url": "https://github.com/Toreon/threat-model-playbook",
            "tags": [
              "owasp",
              "defender",
              "threat-modeling",
              "whiteboard"
            ]
          }
        ],
        "samm2": [
          {
            "maturity": "3",
            "index": 46,
            "practice": "Threat Assessment",
            "stream": "Threat Modeling",
            "function": "Design",
            "id": "D-TA-3-B"
          }
        ],
        "dimension": "Culture and Organization",
        "level": "3",
        "name": "Creation of threat modeling processes and standards",
        "references": [
          {
            "name": "samm2:D-TA-3-B"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001"
          },
          {
            "name": "iso27001-2017:may be part of risk assessment"
          },
          {
            "name": "iso27001-2017:8.2.1"
          },
          {
            "name": "iso27001-2017:14.2.1"
          }
        ],
        "subdimension": "Design"
      },
      {
        "data": "{'risk': [\"Employees don't known their organizations security targets. Therefore security is not considered during development and administration as much as it should be.\"], 'measure': \"Transparent and timely communication of the security targets by senior management is essential to ensure teams' buy-in and support.\", 'usefulness': 4, 'difficultyOfImplementation': {'time': 1, 'knowledge': 1, 'resources': 1}}",
        "done": 0,
        "implementation": [],
        "samm2": [],
        "dimension": "Culture and Organization",
        "level": "0",
        "name": "Information security targets are communicated",
        "references": [
          {
            "name": "iso27001-2017:5.1.1"
          },
          {
            "name": "iso27001-2017:7.2.1"
          }
        ],
        "subdimension": "Design"
      },
      {
        "data": "{'risk': ['Understanding security is hard and personnel needs to be trained on it. Otherwise, flaws like an SQL Injection might be introduced into the software which might get exploited.'], 'measure': 'Provide security awareness training for all personnel involved in software development Ad-Hoc.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 1, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "owasp-cheatsheet-ser",
            "topics": [],
            "url": "https://cheatsheetseries.owasp.org/",
            "tags": [
              "secure coding"
            ]
          },
          {
            "name": "owasp-juice-shop",
            "topics": [],
            "url": "https://github.com/bkimminich/juice-shop",
            "tags": [
              "training"
            ]
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 19,
            "practice": "Education & Guidance",
            "stream": "Training and Awareness",
            "function": "Governance",
            "id": "G-EG-1-A"
          }
        ],
        "dimension": "Culture and Organization",
        "level": "1",
        "name": "Ad-Hoc Security trainings for software developers",
        "references": [
          {
            "name": "samm2:G-EG-1-A"
          },
          {
            "name": "iso27001-2017:7.2.2"
          }
        ],
        "subdimension": "Education and Guidance"
      },
      {
        "data": "{'risk': ['The concept of Security Champions might suggest that only he/she is responsible for security. However, everyone in the project team should be responsible for security.'], 'measure': 'By aligning security SME with project teams, a higher security standard can be achieved.', 'usefulness': 5, 'difficultyOfImplementation': {'time': 4, 'knowledge': 4, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "involve-security-sme",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "3",
            "index": 44,
            "practice": "Education & Guidance",
            "stream": "Organization and Culture",
            "function": "Governance",
            "id": "G-EG-3-B"
          }
        ],
        "dimension": "Culture and Organization",
        "level": "4",
        "name": "Aligning security in teams",
        "references": [
          {
            "name": "samm2:G-EG-3-B"
          },
          {
            "name": "iso27001-2017:7.1.1"
          }
        ],
        "subdimension": "Education and Guidance"
      },
      {
        "data": "{'risk': ['Understanding security is hard, even for security champions and the conduction of security training often focuses on breaking a component instead of building a component secure.'], 'measure': 'The build-it, break-it, fix-it contest allows to train people with security related roles like security champions the build, break and fix part of a secure application. This increases the learning of building secure components.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 3, 'knowledge': 5, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "build-it-break-it-fi",
            "topics": [],
            "url": "https://builditbreakit.org/",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 13,
            "practice": "Education & Guidance",
            "stream": "Training and Awareness",
            "function": "Governance",
            "id": "G-EG-2-A"
          }
        ],
        "dimension": "Culture and Organization",
        "level": "3",
        "name": "Conduction of build-it, break-it, fix-it contests",
        "references": [
          {
            "name": "samm2:G-EG-2-A"
          },
          {
            "name": "iso27001-2017:7.2.2"
          }
        ],
        "subdimension": "Education and Guidance"
      },
      {
        "data": "{'risk': ['Security checks by external companies do not increase the understanding of an application/system for internal employees.'], 'measure': 'Periodically security reviews of source code (SCA), in which security SME, developers and operations are involved, are effective at increasing the robustness of software and the security knowledge of the teams involved.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 2, 'knowledge': 3, 'resources': 1}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 13,
            "practice": "Education & Guidance",
            "stream": "Training and Awareness",
            "function": "Governance",
            "id": "G-EG-2-A"
          }
        ],
        "dimension": "Culture and Organization",
        "level": "3",
        "name": "Conduction of collaborative security checks with developers and system administrators",
        "references": [
          {
            "name": "samm2:G-EG-2-A"
          },
          {
            "name": "iso27001-2017:Mutual review of source code is not explicitly required in ISO 27001 may be"
          },
          {
            "name": "iso27001-2017:7.2.2"
          },
          {
            "name": "iso27001-2017:12.6.1"
          },
          {
            "name": "iso27001-2017:12.7.1"
          }
        ],
        "subdimension": "Education and Guidance"
      },
      {
        "data": "{'risk': ['Development teams limited insight over security practices.'], 'measure': 'Mutual security testing the security of other teams project enhances security awareness and knowledge.', 'usefulness': 2, 'difficultyOfImplementation': {'time': 4, 'knowledge': 4, 'resources': 2}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 13,
            "practice": "Education & Guidance",
            "stream": "Training and Awareness",
            "function": "Governance",
            "id": "G-EG-2-A"
          },
          {
            "maturity": "1",
            "index": 19,
            "practice": "Education & Guidance",
            "stream": "Training and Awareness",
            "function": "Governance",
            "id": "G-EG-1-A"
          }
        ],
        "dimension": "Culture and Organization",
        "level": "4",
        "name": "Conduction of collaborative team security checks",
        "references": [
          {
            "name": "samm2:G-EG-1-A"
          },
          {
            "name": "samm2:G-EG-2-A"
          },
          {
            "name": "iso27001-2017:Mutual security testing is not explicitly required in ISO 27001 may be"
          },
          {
            "name": "iso27001-2017:7.2.2"
          }
        ],
        "subdimension": "Education and Guidance"
      },
      {
        "data": "{'risk': ['Understanding incident response plans during an incident is hard and ineffective.'], 'measure': 'War Games like activities help train for incidents. Security SMEs create attack scenarios in a testing environment enabling the trainees to learn how to react in case of an incident.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 5, 'knowledge': 4, 'resources': 4}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 13,
            "practice": "Education & Guidance",
            "stream": "Training and Awareness",
            "function": "Governance",
            "id": "G-EG-2-A"
          }
        ],
        "dimension": "Culture and Organization",
        "level": "4",
        "name": "Conduction of war games",
        "references": [
          {
            "name": "samm2:G-EG-2-A"
          },
          {
            "name": "iso27001-2017:ware games are not explicitly required in ISO 27001 may be"
          },
          {
            "name": "iso27001-2017:7.2.2"
          },
          {
            "name": "iso27001-2017:16.1"
          },
          {
            "name": "iso27001-2017:16.1.5"
          }
        ],
        "subdimension": "Education and Guidance"
      },
      {
        "data": "{'risk': ['No one feels directly responsible for security and the security champion does not have enough time to allocate to each team.'], 'measure': \"Each team defines an individual to be responsible for security. These individuals are often referred to as 'security champions'\", 'usefulness': 4, 'md-description': 'Implement a program where each software development team has a member considered a “Security Champion” who is the liaison between Information Security and developers. Depending on the size and structure of the team the “Security Champion” may be a software developer, tester, or a product manager. The “Security Champion” has a set number of hours per week for Information Security related activities. They participate in periodic briefings to increase awareness and expertise in different security disciplines. “Security Champions” have additional training to help develop these roles as Software Security subject-matter experts. You may need to customize the way you create and support “Security Champions” for cultural reasons.\\n\\nThe goals of the position are to increase effectiveness and efficiency of application security and compliance and to strengthen the relationship between various teams and Information Security. To achieve these objectives, “Security Champions” assist with researching, verifying, and prioritizing security and compliance related software defects. They are involved in all Risk Assessments, Threat Assessments, and Architectural Reviews to help identify opportunities to remediate security defects by making the architecture of the application more resilient and reducing the attack threat surface.\\nSource: [OWASP SAMM](https://owaspsamm.org/model/governance/education-and-guidance/stream-b/)\\n', 'difficultyOfImplementation': {'time': 2, 'knowledge': 3, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "owasp-security-champ",
            "topics": [],
            "url": "https://github.com/c0rdis/security-champions-playbook",
            "tags": [
              "security champions"
            ]
          }
        ],
        "samm2": [
          {
            "maturity": "3",
            "index": 44,
            "practice": "Education & Guidance",
            "stream": "Organization and Culture",
            "function": "Governance",
            "id": "G-EG-3-B"
          },
          {
            "maturity": "1",
            "index": 65,
            "practice": "Education & Guidance",
            "stream": "Organization and Culture",
            "function": "Governance",
            "id": "G-EG-1-B"
          },
          {
            "maturity": "2",
            "index": 67,
            "practice": "Education & Guidance",
            "stream": "Organization and Culture",
            "function": "Governance",
            "id": "G-EG-2-B"
          }
        ],
        "dimension": "Culture and Organization",
        "level": "2",
        "name": "Each team has a security champion",
        "references": [
          {
            "name": "samm2:G-EG-1-B"
          },
          {
            "name": "samm2:G-EG-2-B"
          },
          {
            "name": "samm2:G-EG-3-B"
          },
          {
            "name": "iso27001-2017:security champions are missing in ISO 27001 most likely"
          },
          {
            "name": "iso27001-2017:7.2.1"
          },
          {
            "name": "iso27001-2017:7.2.2"
          }
        ],
        "subdimension": "Education and Guidance"
      },
      {
        "data": "{'risk': ['Understanding security is hard.'], 'measure': 'Provide security awareness training for all internal personnel involved in software development on a regular basis like twice in a year for 1-3 days.', 'usefulness': 4, 'md-description': 'Conduct security awareness training for all roles currently involved in the management, development, testing, or auditing of the software. The goal is to increase the awareness of application security threats and risks, security best practices, and secure software design principles. Develop training internally or procure it externally. Ideally, deliver training in person so participants can have discussions as a team, but Computer-Based Training (CBT) is also an option.\\n\\nCourse content should include a range of topics relevant to application security and privacy, while remaining accessible to a non-technical audience. Suitable concepts are secure design principles including Least Privilege, Defense-in-Depth, Fail Secure (Safe), Complete Mediation, Session Management, Open Design, and Psychological Acceptability. Additionally, the training should include references to any organization-wide standards, policies, and procedures defined to improve application security. The OWASP Top 10 vulnerabilities should be covered at a high level.\\n\\nTraining is mandatory for all employees and contractors involved with software development and includes an auditable sign-off to demonstrate compliance. Consider incorporating innovative ways of delivery (such as gamification) to maximize its effectiveness and combat desensitization.\\n\\n[Source: OWASP SAMM 2](https://owaspsamm.org/model/governance/education-and-guidance/stream-a/)\\n', 'difficultyOfImplementation': {'time': 4, 'knowledge': 3, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "owasp-cheatsheet-ser",
            "topics": [],
            "url": "https://cheatsheetseries.owasp.org/",
            "tags": [
              "secure coding"
            ]
          },
          {
            "name": "owasp-juiceshop",
            "topics": [],
            "url": "https://github.com/bkimminich/juice-shop",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 19,
            "practice": "Education & Guidance",
            "stream": "Training and Awareness",
            "function": "Governance",
            "id": "G-EG-1-A"
          }
        ],
        "dimension": "Culture and Organization",
        "level": "2",
        "name": "Regular security training for all",
        "references": [
          {
            "name": "samm2:G-EG-1-A"
          },
          {
            "name": "iso27001-2017:7.2.2"
          }
        ],
        "subdimension": "Education and Guidance"
      },
      {
        "data": "{'risk': ['Understanding security is hard.'], 'measure': 'Provide security awareness training for all personnel including externals involved in software development on a regular basis.', 'usefulness': 4, 'difficultyOfImplementation': {'time': 2, 'knowledge': 3, 'resources': 3}}",
        "done": 0,
        "implementation": [
          {
            "name": "https-cheatsheetse",
            "topics": [],
            "url": "https://cheatsheetseries.owasp.org/",
            "tags": [
              "training",
              "secure coding"
            ]
          },
          {
            "name": "owasp-juiceshop",
            "topics": [],
            "url": "https://github.com/bkimminich/juice-shop",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "3",
            "index": 74,
            "practice": "Education & Guidance",
            "stream": "Training and Awareness",
            "function": "Governance",
            "id": "G-EG-3-A"
          }
        ],
        "dimension": "Culture and Organization",
        "level": "4",
        "name": "Regular security training for externals",
        "references": [
          {
            "name": "samm2:G-EG-3-A"
          },
          {
            "name": "iso27001-2017:7.2.2"
          }
        ],
        "subdimension": "Education and Guidance"
      },
      {
        "data": "{'risk': ['Understanding security is hard, even for security champions.'], 'measure': 'Regular security training of security champions.', 'evidence': '- Process Documentation: TODO\\n- Training Content: TOODO\\n', 'dependsOn': ['Each team has a security champion'], 'usefulness': 5, 'difficultyOfImplementation': {'time': 2, 'knowledge': 4, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "owasp-cheatsheet-ser",
            "topics": [],
            "url": "https://cheatsheetseries.owasp.org/",
            "tags": [
              "secure coding"
            ]
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 19,
            "practice": "Education & Guidance",
            "stream": "Training and Awareness",
            "function": "Governance",
            "id": "G-EG-1-A"
          },
          {
            "maturity": "2",
            "index": 85,
            "practice": "Threat Assessment",
            "stream": "Threat Modeling",
            "function": "Design",
            "id": "D-TA-2-B"
          }
        ],
        "dimension": "Culture and Organization",
        "level": "2",
        "name": "Regular security training of security champions",
        "references": [
          {
            "name": "samm2:D-TA-2-B"
          },
          {
            "name": "samm2:G-EG-1-A"
          },
          {
            "name": "iso27001-2017:security champions are missing in ISO 27001"
          },
          {
            "name": "iso27001-2017:7.2.2"
          }
        ],
        "subdimension": "Education and Guidance"
      },
      {
        "data": "{'risk': ['Employees are not getting excited about security.'], 'measure': \"Good communication and transparency encourages cross-organizational support. Gamification of security is also known to help, examples include T-Shirts, mugs, cups, giftcards and 'High-Fives'.\", 'usefulness': 3, 'difficultyOfImplementation': {'time': 2, 'knowledge': 3, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "motivate-people",
            "topics": [],
            "url": "https://github.com/wurstbrot/security-pins",
            "tags": [
              "security champions",
              "gamification",
              "nudging"
            ]
          },
          {
            "name": "owasp-top-10-maturit",
            "topics": [],
            "url": "https://owaspsamm.org/presentations/OWASP_Top_10_Maturity_Categories_for_Security_Champions.pptx",
            "tags": [
              "security champions"
            ]
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 65,
            "practice": "Education & Guidance",
            "stream": "Organization and Culture",
            "function": "Governance",
            "id": "G-EG-1-B"
          }
        ],
        "dimension": "Culture and Organization",
        "level": "2",
        "name": "Reward of good communication",
        "references": [
          {
            "name": "samm2:G-EG-1-B"
          },
          {
            "name": "iso27001-2017:not required by ISO 27001"
          },
          {
            "name": "iso27001-2017:interestingly enough A7.2.3 is requiring a process to handle misconduct but nothing to promote good behavior."
          }
        ],
        "subdimension": "Education and Guidance"
      },
      {
        "data": "{'risk': ['Not asking a security expert when questions regarding security appear might lead to flaws.'], 'measure': 'Security consulting to teams is given on request. The security consultants can be internal or external.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 1, 'knowledge': 3, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "owasp-cheatsheet-ser",
            "topics": [],
            "url": "https://cheatsheetseries.owasp.org/",
            "tags": [
              "secure coding"
            ]
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 19,
            "practice": "Education & Guidance",
            "stream": "Training and Awareness",
            "function": "Governance",
            "id": "G-EG-1-A"
          }
        ],
        "dimension": "Culture and Organization",
        "level": "1",
        "name": "Security consulting on request",
        "references": [
          {
            "name": "samm2:G-EG-1-A"
          },
          {
            "name": "iso27001-2017:security consulting is missing in ISO 27001 may be"
          },
          {
            "name": "iso27001-2017:6.1.1"
          },
          {
            "name": "iso27001-2017:6.1.4"
          },
          {
            "name": "iso27001-2017:6.1.5"
          }
        ],
        "subdimension": "Education and Guidance"
      },
      {
        "data": "{'risk': ['After an incident, a similar incident might reoccur.'], 'measure': \"Running a 'lessons learned' session after an incident helps drive continuous improvement. Regular meetings with security champions are a good place to share and discuss lessons learned.\", 'usefulness': 3, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 1}}",
        "done": 0,
        "implementation": [],
        "samm2": [],
        "dimension": "Culture and Organization",
        "level": "3",
        "name": "Security-Lessoned-Learned",
        "references": [
          {
            "name": "samm2:strategy-and-metrics|B|1"
          },
          {
            "name": "iso27001-2017:16.1.6"
          }
        ],
        "subdimension": "Education and Guidance"
      },
      {
        "data": "{'risk': ['Understanding security is hard.'], 'credits': 'AppSecure-nrw [Security Belts](https://github.com/AppSecure-nrw/security-belts/)\\n', 'measure': 'Participate with your whole team in a simple mob hacking session organized by the Security Champion Guild.\\nIn the session the guild presents a vulnerable application and together you look at possible exploits.\\nJust like in mob programming there is one driver and several navigators.\\n', 'usefulness': 3, 'md-description': '### Guidelines for your simple mob hacking session\\n- All exploits happen via the user interface.\\n- No need for security/hacking tools.\\n- No need for deep technical or security knowledge.\\n- Use an insecure training app, e.g., [DVWA](https://dvwa.co.uk/) or [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/).\\n- Encourage active participation, e.g., use small groups.\\n- Allow enough time for everyone to run at least one exploit.\\n\\n### Benefits\\n- The team gets an idea of how exploits can look like and how easy applications can be attacked.\\n- The team understands functional correct working software can be highly insecure and easy to exploit.\\n', 'difficultyOfImplementation': {'time': 3, 'knowledge': 5, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "damn-vulnerable-web",
            "topics": [],
            "url": "",
            "tags": [
              "training"
            ]
          },
          {
            "name": "owasp-juice-shop",
            "topics": [],
            "url": "https://github.com/bkimminich/juice-shop",
            "tags": [
              "training"
            ]
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 19,
            "practice": "Education & Guidance",
            "stream": "Training and Awareness",
            "function": "Governance",
            "id": "G-EG-1-A"
          }
        ],
        "dimension": "Culture and Organization",
        "level": "2",
        "name": "Simple Mob Hacking",
        "references": [
          {
            "name": "samm2:G-EG-1-A"
          },
          {
            "name": "iso27001-2017:7.2.2"
          }
        ],
        "subdimension": "Education and Guidance"
      },
      {
        "data": "{'risk': ['An individual might forget to implement security measures to protect source code or infrastructure components.'], 'measure': 'On each new version (e.g. Pull Request) of source code or infrastructure components a security peer review of the changes is performed (two eyes principle) and approval given by the reviewer.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [],
        "samm2": [],
        "dimension": "Culture and Organization",
        "level": "3",
        "name": "Approval by reviewing any new version",
        "references": [
          {
            "name": "iso27001-2017:peer review - four eyes principle is not explicitly required by ISO 27001"
          },
          {
            "name": "iso27001-2017:6.1.2"
          },
          {
            "name": "iso27001-2017:14.2.1"
          }
        ],
        "subdimension": "Process"
      },
      {
        "data": "{'risk': ['The impact of a change is not controlled because these are not recorded or documented.'], 'measure': 'Each change of a system is automatically recorded and adequately logged.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 3, 'knowledge': 4, 'resources': 1}}",
        "done": 0,
        "implementation": [],
        "samm2": [],
        "dimension": "Culture and Organization",
        "level": "3",
        "name": "Definition of a change management process",
        "references": [
          {
            "name": "iso27001-2017:14.2.2"
          },
          {
            "name": "iso27001-2017:12.1.2"
          },
          {
            "name": "iso27001-2017:12.4.1"
          }
        ],
        "subdimension": "Process"
      },
      {
        "data": "{'risk': ['In case of an emergency, like a power outage, DR actions to perform are not clear. This leads to reaction and remediation delays.'], 'measure': 'By understanding and documenting a business continuity and disaster recovery (BCDR) plan, the overall availability of systems and applications is increased. Success factors like responsibilities, Service Level Agreements, Recovery Point Objectives, Recovery Time Objectives or Failover must be fully documented and understood.', 'usefulness': 4, 'difficultyOfImplementation': {'time': 3, 'knowledge': 4, 'resources': 2}}",
        "done": 0,
        "implementation": [],
        "samm2": [],
        "dimension": "Culture and Organization",
        "level": "1",
        "name": "Definition of simple BCDR practices for critical components",
        "references": [
          {
            "name": "iso27001-2017:17.1.1"
          }
        ],
        "subdimension": "Process"
      },
      {
        "data": "{'risk': ['Unapproved components are used.'], 'comment': 'By preventing teams from trying out new components, innovation might be hampered', 'measure': 'Components must be whitelisted. Regular scans on the docker infrastructure (e.g. cluster) need to be performed, to verify that only standardized base images are used.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 1, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "example-all-docker",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [],
        "dimension": "Culture and Organization",
        "level": "3",
        "name": "Prevention of unauthorized installation",
        "references": [
          {
            "name": "iso27001-2017:12.5.1"
          },
          {
            "name": "iso27001-2017:12.6.1"
          }
        ],
        "subdimension": "Process"
      },
      {
        "data": "{'risk': ['Using an insecure application might lead to a compromised application. This might lead to total data theft or data modification.'], 'measure': 'Following frameworks like the\\n  <ul>\\n    <li>OWASP Application Security Verification Standard Level 2</li>\\n    <li>OWASP Mobile Application Security Verification Standard Level 2</li>\\n  </ul>\\n', 'usefulness': 4, 'difficultyOfImplementation': {'time': 4, 'knowledge': 4, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "owasp-asvs",
            "topics": [],
            "url": "https://owasp.org/www-project-application-security-verification-standard/",
            "tags": []
          },
          {
            "name": "owasp-masvs",
            "topics": [],
            "url": "https://github.com/OWASP/owasp-masvs",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 24,
            "practice": "Security Requirements",
            "stream": "Software Requirements",
            "function": "Design",
            "id": "D-SR-2-A"
          }
        ],
        "dimension": "Implementation",
        "level": "2",
        "name": "App. Hardening Level 2",
        "references": [
          {
            "name": "samm2:D-SR-2-A"
          },
          {
            "name": "iso27001-2017:hardening is not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:13.1.3"
          }
        ],
        "subdimension": "Application Hardening"
      },
      {
        "data": "{'risk': ['Using an insecure application might lead to a compromised application. This might lead to total data theft or data modification.'], 'measure': 'Following frameworks like the\\n  <ul>\\n    <li>OWASP Application Security Verification Standard Level 3</li>\\n    <li>OWASP Mobile Application Security Verification Standard Maturity Requirements</li>\\n  </ul>\\n  and gain around 75% coverage of both.\\n', 'usefulness': 4, 'difficultyOfImplementation': {'time': 4, 'knowledge': 4, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "owasp-asvs",
            "topics": [],
            "url": "https://owasp.org/www-project-application-security-verification-standard/",
            "tags": []
          },
          {
            "name": "owasp-masvs",
            "topics": [],
            "url": "https://github.com/OWASP/owasp-masvs",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "3",
            "index": 81,
            "practice": "Security Requirements",
            "stream": "Software Requirements",
            "function": "Design",
            "id": "D-SR-3-A"
          }
        ],
        "dimension": "Implementation",
        "level": "3",
        "name": "App. Hardening Level 3",
        "references": [
          {
            "name": "samm2:D-SR-3-A"
          },
          {
            "name": "iso27001-2017:hardening is not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:13.1.3"
          }
        ],
        "subdimension": "Application Hardening"
      },
      {
        "data": "{'risk': ['Using an insecure application might lead to a compromised application. This might lead to total data theft or data modification.'], 'measure': 'Following frameworks like the\\n  <ul>\\n    <li>OWASP Application Security Verification Standard Level 1</li>\\n    <li>OWASP Mobile Application Security Verification Standard Level 1</li>\\n  </ul>\\n\\nin all applications provides a good baseline.\\n', 'usefulness': 4, 'md-description': 'To tackle the security of code developed in-house, OWASP offers an extensive collection of [Cheatsheets](https://cheatsheetseries.owasp.org/) demonstrating how to implement features securely. Moreover, the Security Knowledge Framework[1] offers an extensive library of code patterns spanning several programming languages. These patterns can be used to not only jumpstart the development process, but also do so securely.\\n\\n[...]\\n\\n### Planning aka Requirements Gathering & Analysis\\nThe Requirements gathering process tries to answer the question: _\"What is the system going to do?\"_ At this stage, the [SAMM project](https://owaspsamm.org/model/) offers 3 distinct maturity levels covering both [in-house](https://owaspsamm.org/model/design/security-requirements/stream-a/) software development and [third party](https://owaspsamm.org/model/design/security-requirements/stream-b/) supplier security.\\n\\n![SAMM Requirements](https://github.com/OWASP/www-project-integration-standards/raw/master/writeups/owasp_in_sdlc/images/OWASP-in0.png)\\n\\nOrganizations can use these to add solid security considerations at the start of the Software Development or Procurement process.\\n\\nThese general security considerations can be audited by using a subsection of the ASVS controls in section V1 as a questionnaire. This process attempts to ensure that every feature has concrete security considerations.\\n\\nIn case of internal development and if the organization maps Features to Epics, the [Security Knowledge Framework](https://securityknowledgeframework.org/) can be used to facilitate this process by leveraging its questionnaire function, shown below.\\n\\nSource: [OWASP Project Integration](https://raw.githubusercontent.com/OWASP/www-project-integration-standards/master/writeups/owasp_in_sdlc/index.md)\\n', 'difficultyOfImplementation': {'time': 4, 'knowledge': 4, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "owasp-asvs",
            "topics": [],
            "url": "https://owasp.org/www-project-application-security-verification-standard/",
            "tags": []
          },
          {
            "name": "owasp-masvs",
            "topics": [],
            "url": "https://github.com/OWASP/owasp-masvs",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 76,
            "practice": "Security Requirements",
            "stream": "Software Requirements",
            "function": "Design",
            "id": "D-SR-1-A"
          }
        ],
        "dimension": "Implementation",
        "level": "1",
        "name": "Application Hardening Level 1",
        "references": [
          {
            "name": "samm2:D-SR-1-A"
          },
          {
            "name": "iso27001-2017:hardening is not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:13.1.3"
          }
        ],
        "subdimension": "Application Hardening"
      },
      {
        "data": "{'risk': ['Using an insecure application might lead to a compromised application. This might lead to total data theft or data modification.'], 'measure': 'Following frameworks like the\\n  <ul>\\n    <li>OWASP Application Security Verification Standard Level 3</li>\\n    <li>OWASP Mobile Application Security Verification Standard Maturity Requirements</li>\\n  </ul>\\n  and gain around 95% coverage of both.\\n', 'usefulness': 4, 'difficultyOfImplementation': {'time': 4, 'knowledge': 4, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "owasp-asvs",
            "topics": [],
            "url": "https://owasp.org/www-project-application-security-verification-standard/",
            "tags": []
          },
          {
            "name": "owasp-masvs",
            "topics": [],
            "url": "https://github.com/OWASP/owasp-masvs",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "3",
            "index": 81,
            "practice": "Security Requirements",
            "stream": "Software Requirements",
            "function": "Design",
            "id": "D-SR-3-A"
          }
        ],
        "dimension": "Implementation",
        "level": "4",
        "name": "Full Coverage of App. Hardening Level 3",
        "references": [
          {
            "name": "samm2:D-SR-3-A"
          },
          {
            "name": "iso27001-2017:hardening is not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:13.1.3"
          }
        ],
        "subdimension": "Application Hardening"
      },
      {
        "data": "{'risk': ['One factor authentication is more vulnerable to brute force attacks and is considered less secure.'], 'measure': 'Two factor authentication for all privileged accounts on systems and applications', 'usefulness': 4, 'difficultyOfImplementation': {'time': 2, 'knowledge': 3, 'resources': 3}}",
        "done": 0,
        "implementation": [
          {
            "name": "smartcard",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "sms",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "totp",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "yubikey",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [],
        "dimension": "Implementation",
        "level": "3",
        "name": "2FA",
        "references": [
          {
            "name": "samm2:TODO"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:9.1.1"
          },
          {
            "name": "iso27001-2017:9.4.2"
          },
          {
            "name": "iso27001-2017:14.2.5"
          }
        ],
        "subdimension": "Infrastructure Hardening"
      },
      {
        "data": "{'risk': ['Through a vulnerability in one service on a server, the attacker gains access to other services running on the same server.'], 'measure': 'Applications are running in a dedicated and isolated virtualized environments.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 5}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "1",
            "index": 28,
            "practice": "Environment Management",
            "stream": "Configuration Hardening",
            "function": "Operations",
            "id": "O-EM-1-A"
          }
        ],
        "dimension": "Implementation",
        "level": "2",
        "name": "Applications are running in virtualized environments",
        "references": [
          {
            "name": "samm2:O-EM-1-A"
          },
          {
            "name": "iso27001-2017:virtual environments are not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:13.1.3"
          }
        ],
        "subdimension": "Infrastructure Hardening"
      },
      {
        "data": "{'risk': ['Application and system libraries can have implementation flaws or deployment flaws.'], 'measure': 'Each libraries source is checked to have a trusted source.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 1}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "1",
            "index": 28,
            "practice": "Environment Management",
            "stream": "Configuration Hardening",
            "function": "Operations",
            "id": "O-EM-1-A"
          }
        ],
        "dimension": "Implementation",
        "level": "2",
        "name": "Checking the sources of used libraries",
        "references": [
          {
            "name": "samm2:O-EM-1-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:14.2.1"
          },
          {
            "name": "iso27001-2017:14.2.5"
          }
        ],
        "subdimension": "Infrastructure Hardening"
      },
      {
        "data": "{'risk': ['A compromised infrastructure component might try to send out stolen data.'], 'measure': 'Having a whitelist and explicitly allowing egress traffic provides the ability to stop unauthorized data leakage.', 'dependsOn': [], 'usefulness': 2, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 3}}",
        "done": 0,
        "implementation": [
          {
            "name": "firewalls",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "open-policy-agent",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 28,
            "practice": "Environment Management",
            "stream": "Configuration Hardening",
            "function": "Operations",
            "id": "O-EM-1-A"
          }
        ],
        "dimension": "Implementation",
        "level": "2",
        "name": "Filter outgoing traffic",
        "references": [
          {
            "name": "samm2:O-EM-1-A"
          },
          {
            "name": "iso27001-2017:virtual environments are not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:13.1.3"
          }
        ],
        "subdimension": "Infrastructure Hardening"
      },
      {
        "data": "{'risk': ['The availability of IT systems might be disturbed due to components failures'], 'measure': 'Redundancies in the IT systems', 'dependsOn': ['Infrastructure as Code', 'Usage of <a href=\"https://semver.org/\">Semantic Versioning</a> for components like project images'], 'usefulness': 3, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "remove-direct-access",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 28,
            "practice": "Environment Management",
            "stream": "Configuration Hardening",
            "function": "Operations",
            "id": "O-EM-1-A"
          }
        ],
        "dimension": "Implementation",
        "level": "3",
        "name": "Immutable Infrastructure",
        "references": [
          {
            "name": "samm2:O-EM-1-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:17.2.1"
          }
        ],
        "subdimension": "Infrastructure Hardening"
      },
      {
        "data": "{'risk': ['No tracking of changes in systems might lead to errors in the configuration. In additions, it might lead to unauthorized changes. An examples is jenkins.'], 'measure': 'Systems are setup by code. A full environment can be provisioned. In addition, software like Jenkins 2 can be setup and configured in in code too. The code should be stored in a version control system.', 'usefulness': 4, 'difficultyOfImplementation': {'time': 5, 'knowledge': 3, 'resources': 4}}",
        "done": 0,
        "implementation": [
          {
            "name": "ansible",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "chef",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "gitops",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "jenkinsfile",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "puppet",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 28,
            "practice": "Environment Management",
            "stream": "Configuration Hardening",
            "function": "Operations",
            "id": "O-EM-1-A"
          }
        ],
        "dimension": "Implementation",
        "level": "3",
        "name": "Infrastructure as Code",
        "references": [
          {
            "name": "samm2:O-EM-1-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:12.1.1"
          },
          {
            "name": "iso27001-2017:12.1.2"
          }
        ],
        "subdimension": "Infrastructure Hardening"
      },
      {
        "data": "{'risk': ['Virtual environments in default settings are able to access other virtual environments on the network stack. By using virtual machines, it is often possible to connect to other virtual machines. By using docker, one bridge is used by default so that all containers on one host can communicate with each other.'], 'measure': 'The communication between virtual environments is controlled and regulated.', 'dependsOn': [], 'usefulness': 5, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 3}}",
        "done": 0,
        "implementation": [
          {
            "name": "bridges",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "firewalls",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "istio",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 28,
            "practice": "Environment Management",
            "stream": "Configuration Hardening",
            "function": "Operations",
            "id": "O-EM-1-A"
          }
        ],
        "dimension": "Implementation",
        "level": "1",
        "name": "Isolated networks for virtual environments",
        "references": [
          {
            "name": "samm2:O-EM-1-A"
          },
          {
            "name": "iso27001-2017:virtual environments are not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:13.1.3"
          }
        ],
        "subdimension": "Infrastructure Hardening"
      },
      {
        "data": "{'risk': ['System calls in virtual environments like docker can lead to privilege escalation.'], 'measure': 'System calls in virtual environments like docker are audited and limited.', 'dependsOn': ['Applications are running in virtualized environments'], 'usefulness': 5, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 3}}",
        "done": 0,
        "implementation": [
          {
            "name": "seccomp",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "strace",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 28,
            "practice": "Environment Management",
            "stream": "Configuration Hardening",
            "function": "Operations",
            "id": "O-EM-1-A"
          }
        ],
        "dimension": "Implementation",
        "level": "4",
        "name": "Limitation of system calls in virtual environments",
        "references": [
          {
            "name": "samm2:O-EM-1-A"
          },
          {
            "name": "iso27001-2017:system hardening is not explicitly covered by ISO 27001 - too specific"
          }
        ],
        "subdimension": "Infrastructure Hardening"
      },
      {
        "data": "{'risk': ['Monolithic applications are hard to test.'], 'measure': 'A microservice-architecture helps to have small components, which are more easy to test.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 5, 'knowledge': 4, 'resources': 5}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "1",
            "index": 28,
            "practice": "Environment Management",
            "stream": "Configuration Hardening",
            "function": "Operations",
            "id": "O-EM-1-A"
          }
        ],
        "dimension": "Implementation",
        "level": "4",
        "name": "Microservice-Architecture",
        "references": [
          {
            "name": "samm2:O-EM-1-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001"
          }
        ],
        "subdimension": "Infrastructure Hardening"
      },
      {
        "data": "{'risk': ['In case an errors occurs in production, the developer need to be able to create a production near environment on a local development environment.'], 'measure': 'Usage of infrastructure as code helps to create a production near environment. The developer needs to be trained in order to setup a local development environment. In addition, it should be possible to create production like test data. Often personal identifiable information is anonymized in order to comply with data protection laws.', 'dependsOn': ['Defined deployment process', 'Infrastructure as Code'], 'usefulness': 4, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 3}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "1",
            "index": 28,
            "practice": "Environment Management",
            "stream": "Configuration Hardening",
            "function": "Operations",
            "id": "O-EM-1-A"
          }
        ],
        "dimension": "Implementation",
        "level": "4",
        "name": "Production near environments are used by developers",
        "references": [
          {
            "name": "samm2:O-EM-1-A"
          },
          {
            "name": "iso27001-2017:12.1.4"
          },
          {
            "name": "iso27001-2017:17.2.1"
          }
        ],
        "subdimension": "Infrastructure Hardening"
      },
      {
        "data": "{'risk': ['Everyone is able to get unauthorized access to information on systems or to modify information unauthorized on systems.'], 'measure': 'The usage of a (role based) access control helps to restrict system access to authorized users.', 'dependsOn': ['Defined deployment process', 'Defined build process'], 'usefulness': 3, 'difficultyOfImplementation': {'time': 3, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "directory-service",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "plugins",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 28,
            "practice": "Environment Management",
            "stream": "Configuration Hardening",
            "function": "Operations",
            "id": "O-EM-1-A"
          }
        ],
        "dimension": "Implementation",
        "level": "3",
        "name": "Role based authentication and authorization",
        "references": [
          {
            "name": "samm2:O-EM-1-A"
          },
          {
            "name": "iso27001-2017:9.4.1"
          }
        ],
        "subdimension": "Infrastructure Hardening"
      },
      {
        "data": "{'risk': ['Attackers a gaining access to internal systems and application interfaces'], 'measure': 'All internal systems are using simple authentication', 'dependsOn': ['Defined deployment process'], 'usefulness': 5, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 3}}",
        "done": 0,
        "implementation": [
          {
            "name": "http-basic-authentic",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "vpn",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 28,
            "practice": "Environment Management",
            "stream": "Configuration Hardening",
            "function": "Operations",
            "id": "O-EM-1-A"
          }
        ],
        "dimension": "Implementation",
        "level": "1",
        "name": "Simple access control for systems",
        "references": [
          {
            "name": "samm2:O-EM-1-A"
          },
          {
            "name": "iso27001-2017:9.4.1"
          }
        ],
        "subdimension": "Infrastructure Hardening"
      },
      {
        "data": "{'risk': ['Using default configurations for a cluster environment leads to potential risks.'], 'measure': \"Harden cluster environments according to best practices. Level 1 and partially level 2 from hardening practices like 'CIS Kubernetes Bench for Security' should considered.\", 'usefulness': 4, 'difficultyOfImplementation': {'time': 3, 'knowledge': 4, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "attack-matrix-cloud",
            "topics": [],
            "url": "https://attack.mitre.org/matrices/enterprise/cloud/",
            "tags": [
              "mitre"
            ]
          },
          {
            "name": "attack-matrix-contai",
            "topics": [],
            "url": "https://attack.mitre.org/matrices/enterprise/cloud/",
            "tags": [
              "mitre"
            ]
          },
          {
            "name": "attack-matrix-kubern",
            "topics": [],
            "url": "https://www.microsoft.com/security/blog/2020/04/02/attack-matrix-kubernetes/",
            "tags": [
              "mitre"
            ]
          },
          {
            "name": "cis-docker-bench-for",
            "topics": [],
            "url": "https://www.cisecurity.org/cis-benchmarks/",
            "tags": []
          },
          {
            "name": "cis-kubernetes-bench",
            "topics": [],
            "url": "https://www.cisecurity.org/cis-benchmarks/",
            "tags": []
          },
          {
            "name": "for-example-for-cont",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 28,
            "practice": "Environment Management",
            "stream": "Configuration Hardening",
            "function": "Operations",
            "id": "O-EM-1-A"
          }
        ],
        "dimension": "Implementation",
        "level": "2",
        "name": "The cluster is hardened",
        "references": [
          {
            "name": "samm2:O-EM-1-A"
          },
          {
            "name": "iso27001-2017:system hardening is not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:13.1.3"
          }
        ],
        "subdimension": "Infrastructure Hardening"
      },
      {
        "data": "{'risk': ['Due to manual changes on a system, they are not replaceable anymore. In case of a crash it might happen that a planned redundant system is unavailable. In addition, it is hard to replay manual changes.'], 'measure': 'A randomized periodically shutdown of systems makes sure, that nobody will perform manual changes to a system.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 5, 'knowledge': 3, 'resources': 5}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "1",
            "index": 28,
            "practice": "Environment Management",
            "stream": "Configuration Hardening",
            "function": "Operations",
            "id": "O-EM-1-A"
          }
        ],
        "dimension": "Implementation",
        "level": "4",
        "name": "Usage of a chaos monkey",
        "references": [
          {
            "name": "samm2:O-EM-1-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:17.1.3"
          }
        ],
        "subdimension": "Infrastructure Hardening"
      },
      {
        "data": "{'risk': ['Components (images, libraries, applications) are not hardened.'], 'measure': 'Hardening of components is important, specially for image on which other teams base on. Hardening should be performed on the operation system and on the services inside (e.g. Nginx or a Java-Application).', 'dependsOn': ['Defined build process'], 'usefulness': 3, 'difficultyOfImplementation': {'time': 3, 'knowledge': 4, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "authentication",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "crypto",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "for-applications-ch",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "managing-secrets",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 28,
            "practice": "Environment Management",
            "stream": "Configuration Hardening",
            "function": "Operations",
            "id": "O-EM-1-A"
          }
        ],
        "dimension": "Implementation",
        "level": "2",
        "name": "Usage of security by default for components",
        "references": [
          {
            "name": "samm2:O-EM-1-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          }
        ],
        "subdimension": "Infrastructure Hardening"
      },
      {
        "data": "{'risk': ['Security tests are not running regularly because test environments are missing'], 'measure': 'A production and a production like environment is used', 'dependsOn': ['Defined deployment process'], 'usefulness': 4, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 5}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "1",
            "index": 28,
            "practice": "Environment Management",
            "stream": "Configuration Hardening",
            "function": "Operations",
            "id": "O-EM-1-A"
          }
        ],
        "dimension": "Implementation",
        "level": "1",
        "name": "Usage of test and production environments",
        "references": [
          {
            "name": "samm2:O-EM-1-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:12.1.4"
          },
          {
            "name": "iso27001-2017:17.2.1"
          }
        ],
        "subdimension": "Infrastructure Hardening"
      },
      {
        "data": "{'risk': ['Changes to production systems can not be undone.'], 'measure': 'versioning of artifacts related to production environments. For example Jenkins configuration, docker images, system provisioning code.', 'dependsOn': ['Defined deployment process'], 'usefulness': 5, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 3}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "1",
            "index": 28,
            "practice": "Environment Management",
            "stream": "Configuration Hardening",
            "function": "Operations",
            "id": "O-EM-1-A"
          }
        ],
        "dimension": "Implementation",
        "level": "3",
        "name": "Versioning",
        "references": [
          {
            "name": "samm2:O-EM-1-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:12.1.1"
          },
          {
            "name": "iso27001-2017:12.1.2"
          },
          {
            "name": "iso27001-2017:14.2.2"
          }
        ],
        "subdimension": "Infrastructure Hardening"
      },
      {
        "data": "{'risk': ['Denial of service (internally by an attacker or unintentionally by a bug) on one service effects other services'], 'measure': 'All virtual environments are using resource limits on hard disks, memory and CPU', 'dependsOn': ['Applications are running in virtualized environments'], 'usefulness': 3, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 3}}",
        "done": 1,
        "implementation": [],
        "samm2": [
          {
            "maturity": "1",
            "index": 28,
            "practice": "Environment Management",
            "stream": "Configuration Hardening",
            "function": "Operations",
            "id": "O-EM-1-A"
          }
        ],
        "dimension": "Implementation",
        "level": "2",
        "name": "Virtual environments are limited",
        "references": [
          {
            "name": "samm2:O-EM-1-A"
          },
          {
            "name": "iso27001-2017:virtual environments are not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:12.1.3"
          },
          {
            "name": "iso27001-2017:13.1.3"
          },
          {
            "name": "iso27001-2017:17.2.1"
          }
        ],
        "subdimension": "Infrastructure Hardening"
      },
      {
        "data": "{'risk': ['Local stored logs can be unauthorized manipulated by attackers with system access or might be corrupt after an incident. In addition, it is hard to perform an correlation of logs. This leads attacks, which can be performed silently.'], 'measure': 'A centralized logging system is used and applications logs (including application exceptions) are shipped to it.', 'dependsOn': ['Visualized logging', 'Alerting'], 'usefulness': 5, 'difficultyOfImplementation': {'time': 1, 'knowledge': 1, 'resources': 1}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "1",
            "index": 57,
            "practice": "Incident Management",
            "stream": "Incident Detection",
            "function": "Operations",
            "id": "O-IM-1-A"
          }
        ],
        "dimension": "Information Gathering",
        "level": "3",
        "name": "Centralized application logging",
        "references": [
          {
            "name": "samm2:O-IM-1-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:12.4.1"
          }
        ],
        "subdimension": "Logging"
      },
      {
        "data": "{'risk': ['Local stored system logs can be unauthorized manipulated by attackers or might be corrupt after an incident. In addition, it is hard to perform a aggregation of logs.'], 'measure': 'By using centralized logging logs are protected against unauthorized modification.', 'usefulness': 2, 'difficultyOfImplementation': {'time': 1, 'knowledge': 1, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "logstash",
            "topics": [],
            "url": "https://www.elastic.co/guide/en/logstash/current/getting-started-with-logstash.html",
            "tags": [
              "tool",
              "logging"
            ]
          },
          {
            "name": "rsyslog",
            "topics": [],
            "url": "https://www.rsyslog.com/",
            "tags": [
              "tool",
              "logging"
            ]
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 57,
            "practice": "Incident Management",
            "stream": "Incident Detection",
            "function": "Operations",
            "id": "O-IM-1-A"
          }
        ],
        "dimension": "Information Gathering",
        "level": "1",
        "name": "Centralized system logging",
        "references": [
          {
            "name": "samm2:O-IM-1-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:12.4.1"
          }
        ],
        "subdimension": "Logging"
      },
      {
        "data": "{'risk': ['Detection of security related events with hints on different systems/tools/metrics is not possible.'], 'measure': 'Events are correlated on one system. For example the correlation and visualization of failed login attempts combined with successful login attempts.', 'dependsOn': ['Visualized logging', 'Alerting'], 'usefulness': 3, 'difficultyOfImplementation': {'time': 4, 'knowledge': 4, 'resources': 4}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 39,
            "practice": "Incident Management",
            "stream": "Incident Detection",
            "function": "Operations",
            "id": "O-IM-2-A"
          }
        ],
        "dimension": "Information Gathering",
        "level": "4",
        "name": "Correlation of security events",
        "references": [
          {
            "name": "samm2:O-IM-2-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:12.4.1"
          }
        ],
        "subdimension": "Logging"
      },
      {
        "data": "{'credits': '[AppSecure-nrw](https://github.com/AppSecure-nrw/security-belts/blob/master/orange/logging-of-security-events.md)\\n', 'measure': 'Security-relevant events like login/logout or creation, change, deletion of users should be logged.', 'risk-md': '- No track of security-relevant events makes it harder to analyze an incident.\\n- Security incident analysis takes significantly less time with proper security events, such that an attack can be stopped before the attacker reaches his goal.\\n', 'assessment': '- Show which events are logged.\\n- Show a test for one event logging.\\n', 'usefulness': 4, 'md-description': 'Implement logging of security relevant events. The following events tend to be security relevant:\\n  - successful/failed login/logout\\n  - creation, change, and deletion of users\\n  - errors during input validation and output creation\\n  - exceptions and errors with security in their name\\n  - transactions of value (e.g., financial transactions, costly operations)\\n  - :unicorn: (special things of your application)\\n', 'difficultyOfImplementation': {'time': 1, 'knowledge': 1, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "bash",
            "topics": [],
            "url": "",
            "tags": [
              "tool"
            ]
          },
          {
            "name": "fluentd",
            "topics": [],
            "url": "",
            "tags": [
              "tool"
            ]
          },
          {
            "name": "logstash",
            "topics": [],
            "url": "https://www.elastic.co/guide/en/logstash/current/getting-started-with-logstash.html",
            "tags": [
              "tool",
              "logging"
            ]
          },
          {
            "name": "owasp-logging-cheats",
            "topics": [],
            "url": "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html",
            "tags": [
              "logging",
              "documentation"
            ]
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 57,
            "practice": "Incident Management",
            "stream": "Incident Detection",
            "function": "Operations",
            "id": "O-IM-1-A"
          }
        ],
        "dimension": "Information Gathering",
        "level": "1",
        "name": "Logging of security events",
        "references": [
          {
            "name": "samm2:O-IM-1-A"
          },
          {
            "name": "iso27001-2017:12.4.1"
          }
        ],
        "subdimension": "Logging"
      },
      {
        "data": "{'risk': ['Personal identifiable information (PII) is logged and the law of GDPR is not followed.'], 'measure': 'A concept how to log PII is documented and applied.', 'usefulness': 1, 'difficultyOfImplementation': {'time': 1, 'knowledge': 1, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "bash",
            "topics": [],
            "url": "",
            "tags": [
              "tool"
            ]
          },
          {
            "name": "fluentd",
            "topics": [],
            "url": "",
            "tags": [
              "tool"
            ]
          },
          {
            "name": "logstash",
            "topics": [],
            "url": "https://www.elastic.co/guide/en/logstash/current/getting-started-with-logstash.html",
            "tags": [
              "tool",
              "logging"
            ]
          },
          {
            "name": "rsyslog",
            "topics": [],
            "url": "https://www.rsyslog.com/",
            "tags": [
              "tool",
              "logging"
            ]
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 57,
            "practice": "Incident Management",
            "stream": "Incident Detection",
            "function": "Operations",
            "id": "O-IM-1-A"
          }
        ],
        "dimension": "Information Gathering",
        "level": "1",
        "name": "PII logging concept",
        "references": [
          {
            "name": "samm2:O-IM-1-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:12.4.1"
          },
          {
            "name": "iso27001-2017:18.1.1"
          }
        ],
        "subdimension": "Logging"
      },
      {
        "data": "{'risk': [\"System and application protocols are not visualized properly which leads to no or very limited logging assessment. Specially developers might have difficulty to read applications logs with unusually tools like the Linux tool 'cat'\"], 'measure': 'Protocols are visualized in a simple to use real time monitoring system. The GUI gives the ability to search for special attributes in the protocol.', 'dependsOn': ['Centralized system logging', 'Centralized application logging'], 'usefulness': 4, 'difficultyOfImplementation': {'time': 3, 'knowledge': 1, 'resources': 3}}",
        "done": 0,
        "implementation": [
          {
            "name": "elk-stack",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 57,
            "practice": "Incident Management",
            "stream": "Incident Detection",
            "function": "Operations",
            "id": "O-IM-1-A"
          }
        ],
        "dimension": "Information Gathering",
        "level": "2",
        "name": "Visualized logging",
        "references": [
          {
            "name": "samm2:O-IM-1-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:12.4.1"
          }
        ],
        "subdimension": "Logging"
      },
      {
        "data": "{'risk': ['Trends and advanced attacks are not detected.'], 'measure': \"Advanced metrics are gathered in relation to availability and stability. For example unplanned downtime's per year.\", 'dependsOn': ['Simple application metrics', 'Visualized metrics'], 'usefulness': 4, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 2}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 39,
            "practice": "Incident Management",
            "stream": "Incident Detection",
            "function": "Operations",
            "id": "O-IM-2-A"
          }
        ],
        "dimension": "Information Gathering",
        "level": "3",
        "name": "Advanced availability and stability metrics",
        "references": [
          {
            "name": "samm2:O-IM-2-A"
          },
          {
            "name": "iso27001-2017:12.1.3"
          }
        ],
        "subdimension": "Monitoring"
      },
      {
        "data": "{'risk': ['People are not looking into tests results. Vulnerabilities not recolonized, even they are detected by tools.'], 'measure': 'All defects from the dimension Test- and Verification are instrumented.', 'dependsOn': ['Simple application metrics', 'Visualized metrics'], 'usefulness': 4, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 2}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 39,
            "practice": "Incident Management",
            "stream": "Incident Detection",
            "function": "Operations",
            "id": "O-IM-2-A"
          }
        ],
        "dimension": "Information Gathering",
        "level": "3",
        "name": "Advanced webapplication metrics",
        "references": [
          {
            "name": "samm2:O-IM-2-A"
          },
          {
            "name": "iso27001-2017:12.6.1"
          }
        ],
        "subdimension": "Monitoring"
      },
      {
        "data": "{'risk': ['Incidents are discovered after they happened.'], 'measure': 'Thresholds for metrics are set. In case the thresholds are reached, alarms are send out. Which should get attention due to the critically.\\n', 'dependsOn': ['Visualized metrics'], 'usefulness': 5, 'difficultyOfImplementation': {'time': 5, 'knowledge': 2, 'resources': 5}}",
        "done": 0,
        "implementation": [],
        "samm2": [],
        "dimension": "Information Gathering",
        "level": "2",
        "name": "Alerting",
        "references": [
          {
            "name": "samm2:O-DM-3-B"
          },
          {
            "name": "iso27001-2017:16.1.2"
          },
          {
            "name": "iso27001-2017:16.1.4"
          },
          {
            "name": "iso27001-2017:12.1.4"
          }
        ],
        "subdimension": "Monitoring"
      },
      {
        "data": "{'risk': ['The effectiveness of configuration, patch and vulnerability management is unknown.'], 'measure': 'Usage of Coverage- and control-metrics to show the effectiveness of the security program. Coverage is the degree in \\n        which a specific security control for a specific target group is applied with all resources.\\n        The control degree shows the actual application of security standards and security-guidelines. Examples are gathering information on anti-virus, anti-rootkits, patch management, server configuration and vulnerability management.', 'dependsOn': ['Visualized metrics'], 'usefulness': 4, 'difficultyOfImplementation': {'time': 5, 'knowledge': 3, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "https-ht-transpare",
            "topics": [],
            "url": "https://ht.transparencytoolkit.org/FileServer/FileServer/OLD",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 39,
            "practice": "Incident Management",
            "stream": "Incident Detection",
            "function": "Operations",
            "id": "O-IM-2-A"
          }
        ],
        "dimension": "Information Gathering",
        "level": "4",
        "name": "Coverage and control metrics",
        "references": [
          {
            "name": "samm2:O-IM-2-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          }
        ],
        "subdimension": "Monitoring"
      },
      {
        "data": "{'risk': ['High resources are used while gathering unused metrics.'], 'measure': 'Deactivation of unused metrics helps to free resources.', 'dependsOn': ['Visualized metrics'], 'usefulness': 5, 'difficultyOfImplementation': {'time': 5, 'knowledge': 2, 'resources': 5}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "1",
            "index": 57,
            "practice": "Incident Management",
            "stream": "Incident Detection",
            "function": "Operations",
            "id": "O-IM-1-A"
          }
        ],
        "dimension": "Information Gathering",
        "level": "3",
        "name": "Deactivation of unused metrics",
        "references": [
          {
            "name": "samm2:O-IM-1-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:12.1.3"
          }
        ],
        "subdimension": "Monitoring"
      },
      {
        "data": "{'risk': ['IDS/IPS systems like packet- or application-firewalls detect and prevent attacks. It is not known how many attacks has been detected and blocked.'], 'measure': 'Gathering of defense metrics like TCP/UDP sources enables to assume the geographic location of the request.\\nAssuming a Kubernetes cluster with an egress-traffic filter (e.g. IP/domain based), an alert might be send out in case of every violation. For ingress-traffic, alerting might not even be considered.\\n', 'dependsOn': ['Visualized metrics', 'Filter outgoing traffic'], 'usefulness': 4, 'difficultyOfImplementation': {'time': 5, 'knowledge': 3, 'resources': 2}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 39,
            "practice": "Incident Management",
            "stream": "Incident Detection",
            "function": "Operations",
            "id": "O-IM-2-A"
          }
        ],
        "dimension": "Information Gathering",
        "level": "4",
        "name": "Defense metrics",
        "references": [
          {
            "name": "samm2:O-IM-2-A"
          },
          {
            "name": "iso27001-2017:12.4.1"
          },
          {
            "name": "iso27001-2017:13.1.1"
          }
        ],
        "subdimension": "Monitoring"
      },
      {
        "data": "{'risk': ['The analysis of metrics takes long.'], 'measure': 'Meaningful grouping of metrics helps to speed up analysis.', 'usefulness': 2, 'difficultyOfImplementation': {'time': 4, 'knowledge': 2, 'resources': 2}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 39,
            "practice": "Incident Management",
            "stream": "Incident Detection",
            "function": "Operations",
            "id": "O-IM-2-A"
          }
        ],
        "dimension": "Information Gathering",
        "level": "3",
        "name": "Grouping of metrics",
        "references": [
          {
            "name": "samm2:O-IM-2-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:12.1.3"
          }
        ],
        "subdimension": "Monitoring"
      },
      {
        "data": "{'risk': ['Changes might cause high load due to programming errors.'], 'measure': 'Metrics during tests helps to identify programming errors.', 'dependsOn': ['Grouping of metrics'], 'usefulness': 5, 'difficultyOfImplementation': {'time': 3, 'knowledge': 2, 'resources': 2}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 39,
            "practice": "Incident Management",
            "stream": "Incident Detection",
            "function": "Operations",
            "id": "O-IM-2-A"
          }
        ],
        "dimension": "Information Gathering",
        "level": "4",
        "name": "Metrics are combined with tests",
        "references": [
          {
            "name": "samm2:O-IM-2-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001"
          }
        ],
        "subdimension": "Monitoring"
      },
      {
        "data": "{'risk': ['Security related information is discovered too late during an incident.'], 'measure': 'By having an internal accessible screen with a security related dashboards helps to visualize incidents.', 'dependsOn': ['Grouping of metrics'], 'usefulness': 5, 'difficultyOfImplementation': {'time': 1, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 39,
            "practice": "Incident Management",
            "stream": "Incident Detection",
            "function": "Operations",
            "id": "O-IM-2-A"
          }
        ],
        "dimension": "Information Gathering",
        "level": "4",
        "name": "Screens with metric visualization",
        "references": [
          {
            "name": "samm2:O-IM-2-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:16.1.5"
          }
        ],
        "subdimension": "Monitoring"
      },
      {
        "data": "{'risk': ['Attacks on an application are not recognized.'], 'measure': 'Gathering of application metrics helps to identify incidents like brute force attacks, login/logout.', 'usefulness': 5, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "prometheus",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 57,
            "practice": "Incident Management",
            "stream": "Incident Detection",
            "function": "Operations",
            "id": "O-IM-1-A"
          }
        ],
        "dimension": "Information Gathering",
        "level": "1",
        "name": "Simple application metrics",
        "references": [
          {
            "name": "samm2:O-IM-1-A"
          },
          {
            "name": "iso27001-2017:12.4.1"
          }
        ],
        "subdimension": "Monitoring"
      },
      {
        "data": "{'risk': ['Without simple metrics analysis of incidents are hard. In case an application uses a lot of CPU from time to time, it is hard for a developer to find out the source with Linux commands.'], 'measure': 'Gathering of system metrics helps to identify incidents and specially bottlenecks like in CPU usage, memory usage and hard disk usage.', 'usefulness': 5, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "collected",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 57,
            "practice": "Incident Management",
            "stream": "Incident Detection",
            "function": "Operations",
            "id": "O-IM-1-A"
          }
        ],
        "dimension": "Information Gathering",
        "level": "1",
        "name": "Simple system metrics",
        "references": [
          {
            "name": "samm2:O-IM-1-A"
          },
          {
            "name": "iso27001-2017:12.1.3"
          }
        ],
        "subdimension": "Monitoring"
      },
      {
        "data": "{'risk': ['People are bored (ignorant) of incident alarm messages, as they are not responsible to react.'], 'measure': 'By the definition of target groups for incidents people are only getting alarms for incidents they are in charge for.', 'dependsOn': ['Alerting'], 'usefulness': 5, 'difficultyOfImplementation': {'time': 5, 'knowledge': 2, 'resources': 5}}",
        "done": 0,
        "implementation": [],
        "samm2": [],
        "dimension": "Information Gathering",
        "level": "3",
        "name": "Targeted alerting",
        "references": [
          {
            "name": "samm2:O-DM-3-B"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:16.1.5"
          }
        ],
        "subdimension": "Monitoring"
      },
      {
        "data": "{'risk': ['Not visualized metrics lead to restricted usage of metrics.'], 'measure': 'Metrics are visualized in real time in a user friendly way.', 'dependsOn': ['Simple application metrics', 'Simple system metrics'], 'usefulness': 3, 'difficultyOfImplementation': {'time': 2, 'knowledge': 1, 'resources': 2}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 39,
            "practice": "Incident Management",
            "stream": "Incident Detection",
            "function": "Operations",
            "id": "O-IM-2-A"
          }
        ],
        "dimension": "Information Gathering",
        "level": "2",
        "name": "Visualized metrics",
        "references": [
          {
            "name": "samm2:O-IM-2-A"
          },
          {
            "name": "iso27001-2017:12.1.3"
          }
        ],
        "subdimension": "Monitoring"
      },
      {
        "data": "{'risk': ['Vulnerabilities are rising due to code changes in a complex microservice environment in not important components.'], 'measure': 'Implementation of security related tests via unit tests and integration tests. Including the test of libraries, in case the are not tested already.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 5, 'knowledge': 5, 'resources': 3}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "3",
            "index": 58,
            "practice": "Security Testing",
            "stream": "Deep Understanding",
            "function": "Verification",
            "id": "V-ST-3-B"
          }
        ],
        "dimension": "Test and Verification",
        "level": "4",
        "name": "High coverage of security related module and integration tests",
        "references": [
          {
            "name": "samm2:V-ST-3-B"
          },
          {
            "name": "iso27001-2017:14.2.3"
          },
          {
            "name": "iso27001-2017:14.2.8"
          }
        ],
        "subdimension": "Application tests"
      },
      {
        "data": "{'risk': ['Vulnerabilities are rising due to code changes in a complex microservice environment.'], 'measure': 'Implementation of essential security related integration tests. For example for authentication and authorization.', 'usefulness': 2, 'difficultyOfImplementation': {'time': 4, 'knowledge': 3, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "httpunit",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "3",
            "index": 58,
            "practice": "Security Testing",
            "stream": "Deep Understanding",
            "function": "Verification",
            "id": "V-ST-3-B"
          }
        ],
        "dimension": "Test and Verification",
        "level": "3",
        "name": "Security integration tests for important components",
        "references": [
          {
            "name": "samm2:V-ST-3-B"
          },
          {
            "name": "iso27001-2017:14.2.3"
          },
          {
            "name": "iso27001-2017:14.2.8"
          }
        ],
        "subdimension": "Application tests"
      },
      {
        "data": "{'risk': ['Vulnerabilities are rising due to code changes.'], 'comment': 'The integration of module tests takes place during development instead, it highlights vulnerabilities in sub-routines, functions, modules, libraries etc. checked.', 'measure': 'Usage of unit tests to test important security related features like authentication and authorization.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 4, 'knowledge': 3, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "junit",
            "topics": [],
            "url": "",
            "tags": [
              "unittest"
            ]
          },
          {
            "name": "karma",
            "topics": [],
            "url": "https://karma-runner.github.io",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "3",
            "index": 58,
            "practice": "Security Testing",
            "stream": "Deep Understanding",
            "function": "Verification",
            "id": "V-ST-3-B"
          }
        ],
        "dimension": "Test and Verification",
        "level": "2",
        "name": "Security unit tests for important components",
        "references": [
          {
            "name": "samm2:V-ST-3-B"
          },
          {
            "name": "iso27001-2017:14.2.3"
          },
          {
            "name": "iso27001-2017:14.2.8"
          }
        ],
        "subdimension": "Application tests"
      },
      {
        "data": "{'risk': ['During a deployment an error might happen which leads to non-availability of the system, a part of the system or a feature.'], 'measure': 'Integration tests are performed against the production environment after each deployment.', 'dependsOn': ['Defined deployment process'], 'usefulness': 2, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 2}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "3",
            "index": 58,
            "practice": "Security Testing",
            "stream": "Deep Understanding",
            "function": "Verification",
            "id": "V-ST-3-B"
          }
        ],
        "dimension": "Test and Verification",
        "level": "4",
        "name": "Smoke Test",
        "references": [
          {
            "name": "samm2:V-ST-3-B"
          },
          {
            "name": "iso27001-2017:14.2.3"
          },
          {
            "name": "iso27001-2017:14.2.8"
          }
        ],
        "subdimension": "Application tests"
      },
      {
        "data": "{'risk': ['Correlation of the vulnerabilities of different tools to have an overview of the the overall security level per component/project/team is not given.'], 'measure': 'Findings are visualized per component/project/team.', 'usefulness': 2, 'difficultyOfImplementation': {'time': 4, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "owasp-defectdojo",
            "topics": [],
            "url": "https://github.com/DefectDojo/django-DefectDojo",
            "tags": [
              "vulnerability management system",
              "owasp"
            ]
          },
          {
            "name": "purify",
            "topics": [],
            "url": "https://github.com/faloker/purify/",
            "tags": [
              "vulnerability management system"
            ]
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 34,
            "practice": "Defect Management",
            "stream": "Metrics and Feedback",
            "function": "Implementation",
            "id": "I-DM-1-B"
          }
        ],
        "dimension": "Test and Verification",
        "level": "4",
        "name": "Advanced visualization of defects",
        "references": [
          {
            "name": "samm2:I-DM-1-B"
          },
          {
            "name": "iso27001-2017:16.1.4"
          },
          {
            "name": "iso27001-2017:8.2.1"
          },
          {
            "name": "iso27001-2017:8.2.2"
          },
          {
            "name": "iso27001-2017:8.2.3"
          }
        ],
        "subdimension": "Consolidation"
      },
      {
        "data": "{'risk': ['Improper examination of vulnerabilities leads to no visibility at all.'], 'measure': 'Quality gates for found vulnerabilities are defined.\\nIn the beginning it is important to not overload the security analyst,\\ntherefore the recommendation\\nis to start with alerting of high critical vulnerabilities.', 'usefulness': 4, 'difficultyOfImplementation': {'time': 1, 'knowledge': 1, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "see-other-actions-e",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 70,
            "practice": "Defect Management",
            "stream": "Defect Tracking",
            "function": "Implementation",
            "id": "I-DM-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "1",
        "name": "Definition of quality gates",
        "references": [
          {
            "name": "samm2:I-DM-2-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:12.6.1"
          },
          {
            "name": "iso27001-2017:16.1.4"
          }
        ],
        "subdimension": "Consolidation"
      },
      {
        "data": "{'risk': ['To read console output of the build server to search for vulnerabilities might be difficult. Also, to check a vulnerability management system might not be a daily task for a developer.'], 'measure': 'Vulnerabilities are tracked in the teams issue system (e.g. jira).', 'usefulness': 2, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "dast",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "sast",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 56,
            "practice": "Defect Management",
            "stream": "Metrics and Feedback",
            "function": "Implementation",
            "id": "I-DM-2-B"
          }
        ],
        "dimension": "Test and Verification",
        "level": "3",
        "name": "Integration of vulnerability issues into the development process",
        "references": [
          {
            "name": "samm2:I-DM-2-B"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:16.1.4"
          },
          {
            "name": "iso27001-2017:16.1.5"
          },
          {
            "name": "iso27001-2017:16.1.6"
          }
        ],
        "subdimension": "Consolidation"
      },
      {
        "data": "{'risk': ['Vulnerability descriptions are hard to understand by staff from operations and development.'], 'measure': 'Vulnerabilities include the test procedure to give the staff from operations and development the ability to reproduce vulnerabilities. This enhances the understanding of vulnerabilities and therefore the fix have a higher quality.', 'usefulness': 2, 'difficultyOfImplementation': {'time': 2, 'knowledge': 3, 'resources': 2}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 56,
            "practice": "Defect Management",
            "stream": "Metrics and Feedback",
            "function": "Implementation",
            "id": "I-DM-2-B"
          }
        ],
        "dimension": "Test and Verification",
        "level": "4",
        "name": "Reproducible defect tickets",
        "references": [
          {
            "name": "samm2:I-DM-2-B"
          },
          {
            "name": "iso27001-2017:16.1.4"
          },
          {
            "name": "iso27001-2017:8.2.1"
          },
          {
            "name": "iso27001-2017:8.2.2"
          },
          {
            "name": "iso27001-2017:8.2.3"
          }
        ],
        "subdimension": "Consolidation"
      },
      {
        "data": "{'risk': ['As false positive occur during each test, all vulnerabilities might be ignored.'], 'measure': 'False positives are suppressed so they will not show up on the next tests again. Most security tools have the possibility to suppress false positives. A Vulnerability Management System might be used.', 'usefulness': 4, 'difficultyOfImplementation': {'time': 1, 'knowledge': 1, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "owasp-defect-dojo",
            "topics": [],
            "url": "https://github.com/DefectDojo/django-DefectDojo",
            "tags": []
          },
          {
            "name": "purify",
            "topics": [],
            "url": "https://github.com/faloker/purify/",
            "tags": [
              "vulnerability management system"
            ]
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 70,
            "practice": "Defect Management",
            "stream": "Defect Tracking",
            "function": "Implementation",
            "id": "I-DM-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "1",
        "name": "Simple false positive treatment",
        "references": [
          {
            "name": "samm2:I-DM-2-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:16.1.6"
          }
        ],
        "subdimension": "Consolidation"
      },
      {
        "data": "{'risk': ['The security level of a component is not visible. Therefore, the motivation to enhance the security is not give.'], 'measure': 'Vulnerabilities are simple visualized.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "logparser-jenkins-pl",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "owasp-defectdojo",
            "topics": [],
            "url": "https://github.com/DefectDojo/django-DefectDojo",
            "tags": [
              "vulnerability management system",
              "owasp"
            ]
          },
          {
            "name": "owasp-dependency-che",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "purify",
            "topics": [],
            "url": "https://github.com/faloker/purify/",
            "tags": [
              "vulnerability management system"
            ]
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 34,
            "practice": "Defect Management",
            "stream": "Metrics and Feedback",
            "function": "Implementation",
            "id": "I-DM-1-B"
          }
        ],
        "dimension": "Test and Verification",
        "level": "2",
        "name": "Simple visualization of defects",
        "references": [
          {
            "name": "samm2:I-DM-1-B"
          },
          {
            "name": "iso27001-2017:16.1.4"
          },
          {
            "name": "iso27001-2017:8.2.1"
          },
          {
            "name": "iso27001-2017:8.2.2"
          },
          {
            "name": "iso27001-2017:8.2.3"
          }
        ],
        "subdimension": "Consolidation"
      },
      {
        "data": "{'risk': ['Vulnerabilities with severity low are not visible.'], 'measure': 'All vulnerabilities are added to the quality gate.', 'usefulness': 2, 'difficultyOfImplementation': {'time': 2, 'knowledge': 3, 'resources': 1}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 56,
            "practice": "Defect Management",
            "stream": "Metrics and Feedback",
            "function": "Implementation",
            "id": "I-DM-2-B"
          }
        ],
        "dimension": "Test and Verification",
        "level": "4",
        "name": "Treatment of all defects",
        "references": [
          {
            "name": "samm2:I-DM-2-B"
          },
          {
            "name": "iso27001-2017:16.1.4"
          },
          {
            "name": "iso27001-2017:12.6.1"
          }
        ],
        "subdimension": "Consolidation"
      },
      {
        "data": "{'risk': ['Vulnerabilities with severity high or higher are not visible.'], 'comment': 'False positive analysis, specially for static analysis, is time consuming.', 'measure': 'Vulnerabilities with severity high or higher are added to the quality gate.', 'usefulness': 4, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 56,
            "practice": "Defect Management",
            "stream": "Metrics and Feedback",
            "function": "Implementation",
            "id": "I-DM-2-B"
          }
        ],
        "dimension": "Test and Verification",
        "level": "1",
        "name": "Treatment of defects with severity high or higher",
        "references": [
          {
            "name": "samm2:I-DM-2-B"
          },
          {
            "name": "iso27001-2017:16.1.4"
          },
          {
            "name": "iso27001-2017:12.6.1"
          }
        ],
        "subdimension": "Consolidation"
      },
      {
        "data": "{'risk': ['Vulnerabilities with severity middle are not visible.'], 'comment': 'False positive analysis, specially for static analysis, is time consuming.', 'measure': 'Vulnerabilities with severity middle are added to the quality gate.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 56,
            "practice": "Defect Management",
            "stream": "Metrics and Feedback",
            "function": "Implementation",
            "id": "I-DM-2-B"
          }
        ],
        "dimension": "Test and Verification",
        "level": "3",
        "name": "Treatment of defects with severity middle",
        "references": [
          {
            "name": "samm2:I-DM-2-B"
          },
          {
            "name": "iso27001-2017:16.1.4"
          },
          {
            "name": "iso27001-2017:12.6.1"
          }
        ],
        "subdimension": "Consolidation"
      },
      {
        "data": "{'risk': ['Maintenance of false positives in each tool enforces a high workload. In addition a correlation of the same finding from different tools is not possible.'], 'measure': 'Aggregation of vulnerabilities in one tool reduce the workload to mark false positives.', 'usefulness': 2, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "owasp-defectdojo",
            "topics": [],
            "url": "https://github.com/DefectDojo/django-DefectDojo",
            "tags": [
              "vulnerability management system",
              "owasp"
            ]
          },
          {
            "name": "purify",
            "topics": [],
            "url": "https://github.com/faloker/purify/",
            "tags": [
              "vulnerability management system"
            ]
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 34,
            "practice": "Defect Management",
            "stream": "Metrics and Feedback",
            "function": "Implementation",
            "id": "I-DM-1-B"
          }
        ],
        "dimension": "Test and Verification",
        "level": "3",
        "name": "Usage of a vulnerability management system",
        "references": [
          {
            "name": "samm2:I-DM-1-B"
          },
          {
            "name": "iso27001-2017:12.6.1"
          },
          {
            "name": "iso27001-2017:16.1.3"
          },
          {
            "name": "iso27001-2017:16.1.4"
          },
          {
            "name": "iso27001-2017:16.1.5"
          },
          {
            "name": "iso27001-2017:16.1.6"
          }
        ],
        "subdimension": "Consolidation"
      },
      {
        "data": "{'risk': ['Parts of the service are not still covered.'], 'measure': 'Check that there are no missing paths in the application with coverage-tools.', 'usefulness': 4, 'difficultyOfImplementation': {'time': 5, 'knowledge': 4, 'resources': 3}}",
        "done": 0,
        "implementation": [
          {
            "name": "owasp-code-pulse",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "4",
        "name": "Coverage analysis",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:part of periodic review, PDCA"
          }
        ],
        "subdimension": "Dynamic depth for applications"
      },
      {
        "data": "{'risk': ['Parts of the service are not covered during the scan, because JavaScript is not getting executed. Therefore, the co'], 'measure': 'Usage of a spider which executes dynamic content like JavaScript, e.g. via Selenium.', 'dependsOn': ['Usage of different roles'], 'usefulness': 4, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 1}}",
        "done": 1,
        "implementation": [
          {
            "name": "ajax-spider",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "2",
        "name": "Coverage of client side dynamic components",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:14.2.3"
          },
          {
            "name": "iso27001-2017:14.2.8"
          }
        ],
        "subdimension": "Dynamic depth for applications"
      },
      {
        "data": "{'risk': ['Hidden endpoints of the service are not getting tracked.'], 'measure': 'Hidden endpoints are getting detected and included in the vulnerability scan.', 'dependsOn': ['Usage of different roles'], 'usefulness': 5, 'difficultyOfImplementation': {'time': 2, 'knowledge': 3, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "curl",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "openapi",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "3",
        "name": "Coverage of hidden endpoints",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          }
        ],
        "subdimension": "Dynamic depth for applications"
      },
      {
        "data": "{'risk': ['Parts of the service are not covered. For example specially formatted or coded parameters are not getting detected as parameter (e.g. parameters in REST-like URLs, parameters in JSON-Format or base64-coded parameters).'], 'measure': 'Special parameter and special encodings are defined, so that they get fuzzed by the used vulnerability scanners.', 'dependsOn': ['Usage of different roles'], 'usefulness': 4, 'difficultyOfImplementation': {'time': 5, 'knowledge': 5, 'resources': 1}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "3",
        "name": "Coverage of more input vectors",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          }
        ],
        "subdimension": "Dynamic depth for applications"
      },
      {
        "data": "{'risk': ['Sequential operations like workflows (e.g. login -> put products in the basket'], 'measure': 'Sequential operations are defined and checked by the vulnerability scanner in the defined order.', 'dependsOn': ['Usage of different roles'], 'usefulness': 5, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "curl",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "3",
        "name": "Coverage of sequential operations",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:14.2.8"
          },
          {
            "name": "iso27001-2017:14.2.3"
          }
        ],
        "subdimension": "Dynamic depth for applications"
      },
      {
        "data": "{'risk': ['Service to service communication is not covered.'], 'measure': 'Service to service communication is dumped and checked.', 'dependsOn': ['Simple Scan'], 'usefulness': 3, 'difficultyOfImplementation': {'time': 5, 'knowledge': 4, 'resources': 2}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "4",
        "name": "Coverage of service to service communication",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:14.2.3"
          },
          {
            "name": "iso27001-2017:14.2.8"
          }
        ],
        "subdimension": "Dynamic depth for applications"
      },
      {
        "data": "{'risk': ['Deficient security tests are performed. Simple vulnerabilities are not detected and missing security configurations (e.g. headers) are not set. Fast feedback is not given.'], 'measure': 'A simple scan is performed to get a security baseline. In case the test is done in under 10 minutes, it should be part of the build and deployment process.', 'dependsOn': ['Defined build process'], 'usefulness': 2, 'difficultyOfImplementation': {'time': 3, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "arachni",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "owasp-zap",
            "topics": [],
            "url": "https://github.com/zaproxy/zaproxy",
            "tags": [
              "vulnerability",
              "scanner"
            ]
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 54,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-1-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "1",
        "name": "Simple Scan",
        "references": [
          {
            "name": "samm2:V-ST-1-A"
          },
          {
            "name": "iso27001-2017:14.2.3"
          },
          {
            "name": "iso27001-2017:14.2.8"
          }
        ],
        "subdimension": "Dynamic depth for applications"
      },
      {
        "data": "{'risk': ['Parts of the service are not covered during the scan, because a login is not performed.'], 'measure': 'Integration of authentication with all roles used in the service.', 'dependsOn': ['Simple Scan'], 'usefulness': 2, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "zest",
            "topics": [],
            "url": "https://www.zaproxy.org/docs/desktop/addons/zest/",
            "tags": [
              "zap"
            ]
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "2",
        "name": "Usage of different roles",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:14.2.3"
          },
          {
            "name": "iso27001-2017:14.2.8"
          }
        ],
        "subdimension": "Dynamic depth for applications"
      },
      {
        "data": "{'risk': ['Each vulnerability scanner has different opportunities. By using just one scanner, some vulnerabilities might not be found.'], 'measure': 'Usage of multiple spiders and scanner enhance the coverage and the vulnerabilities.', 'dependsOn': ['Usage of different roles'], 'usefulness': 1, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 5}}",
        "done": 0,
        "implementation": [
          {
            "name": "owasp-securecodebox",
            "topics": [],
            "url": "https://github.com/secureCodeBox/secureCodeBox",
            "tags": [
              "vulnerability",
              "scanner-orchestration"
            ]
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "3",
        "name": "Usage of multiple scanners",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:12.6.1"
          },
          {
            "name": "iso27001-2017:14.2.5"
          }
        ],
        "subdimension": "Dynamic depth for applications"
      },
      {
        "data": "{'risk': ['As it is unknown how many requests the systems and applications can serve, due to an unexpected load the availability is disturbed.'], 'measure': 'Load test against the production system or a production near system is performed.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 2, 'knowledge': 3, 'resources': 5}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "1",
            "index": 54,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-1-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "4",
        "name": "Load tests",
        "references": [
          {
            "name": "samm2:V-ST-1-A"
          },
          {
            "name": "iso27001-2017:12.1.3"
          },
          {
            "name": "iso27001-2017:14.2.3"
          },
          {
            "name": "iso27001-2017:14.2.8"
          }
        ],
        "subdimension": "Dynamic depth for infrastructure"
      },
      {
        "data": "{'risk': ['Standard network segmentation and firewalling has not been performed, leading to world open cluster management ports.'], 'measure': 'With the help of tools the network configuration of unintentional exposed cluster(s) are tested. To identify clusters, all subdomains might need to be identified with a tool like OWASP Amass to perform portscans based o the result.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 1, 'knowledge': 1, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "nmap",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "owasp-amass",
            "topics": [],
            "url": "https://github.com/OWASP/Amass",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 54,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-1-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "1",
        "name": "Test for exposed services",
        "references": [
          {
            "name": "samm2:V-ST-1-A"
          },
          {
            "name": "iso27001-2017:13.1.3"
          },
          {
            "name": "iso27001-2017:14.2.3"
          },
          {
            "name": "iso27001-2017:14.2.8"
          }
        ],
        "subdimension": "Dynamic depth for infrastructure"
      },
      {
        "data": "{'risk': ['Unused resources, specially secrets, might be still valid, but are exposing information. As an attacker, I compromise a system, gather credentials and try to use them.'], 'measure': 'Test for unused resources helps to identify unused resources.', 'usefulness': 2, 'difficultyOfImplementation': {'time': 1, 'knowledge': 1, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "k8spurger",
            "topics": [],
            "url": "https://github.com/yogeshkk/K8sPurger",
            "tags": [
              "vulnerability",
              "scanner",
              "dast",
              "infrastrcture"
            ]
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 54,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-1-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "4",
        "name": "Test for unused Resources",
        "references": [
          {
            "name": "samm2:V-ST-1-A"
          },
          {
            "name": "iso27001-2017:13.1.3"
          },
          {
            "name": "iso27001-2017:14.2.3"
          },
          {
            "name": "iso27001-2017:14.2.8"
          }
        ],
        "subdimension": "Dynamic depth for infrastructure"
      },
      {
        "data": "{'risk': ['Wrong or no network segmentation of pods makes it easier for an attacker to access a database and extract or modify data.'], 'measure': 'Cluster internal test needs to be performed. Integration of fine granulated network segmentation (also between pods in the same namespace).', 'dependsOn': 'Segmented networks for virtual environments', 'usefulness': 3, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "netassert",
            "topics": [],
            "url": "https://github.com/controlplaneio/netassert",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "2",
        "name": "Test network segmentation",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:13.1.3"
          },
          {
            "name": "iso27001-2017:14.2.3"
          },
          {
            "name": "iso27001-2017:14.2.8"
          }
        ],
        "subdimension": "Dynamic depth for infrastructure"
      },
      {
        "data": "{'risk': ['Standard hardening practices for cloud environments are not performed leading to vulnerabilities.'], 'measure': 'With the help of tools the configuration of virtual environments are tested.', 'usefulness': 4, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "kube-hunter",
            "topics": [],
            "url": "https://github.com/aquasecurity/kube-hunter",
            "tags": []
          },
          {
            "name": "openvas",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [],
        "dimension": "Test and Verification",
        "level": "2",
        "name": "Test of the configuration of cloud environments",
        "references": [
          {
            "name": "iso27001-2017:system hardening is not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:12.6.1"
          },
          {
            "name": "iso27001-2017:14.2.3"
          },
          {
            "name": "iso27001-2017:14.2.8"
          }
        ],
        "subdimension": "Dynamic depth for infrastructure"
      },
      {
        "data": "{'risk': ['Weak passwords in components like applications or systems, specially for privileged accounts, lead to take over of that account.'], 'measure': \"Automatic brute force attacks are performed. Specially the usage of standard accounts like 'admin' and employee user-ids is recommended.\", 'usefulness': 1, 'difficultyOfImplementation': {'time': 1, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "htc-hydra",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "3",
        "name": "Weak password test",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:9.4.3"
          }
        ],
        "subdimension": "Dynamic depth for infrastructure"
      },
      {
        "data": "{'risk': ['Duplicates in source code might influence the stability of the application.'], 'measure': 'Automatic Detection and manual removal of duplicates in source code.', 'dependsOn': ['Defined build process'], 'usefulness': 1, 'difficultyOfImplementation': {'time': 1, 'knowledge': 1, 'resources': 1}}",
        "done": 1,
        "implementation": [
          {
            "name": "pmd",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "4",
        "name": "Exclusion of source code duplicates",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:14.2.1"
          },
          {
            "name": "iso27001-2017:14.2.5"
          }
        ],
        "subdimension": "Static depth for applications"
      },
      {
        "data": "{'risk': ['Used components like libraries and legacy applications might have vulnerabilities'], 'measure': 'Usage of a static analysis for all used components.', 'dependsOn': ['Static analysis for important client side components', 'Static analysis for important server side components'], 'usefulness': 3, 'difficultyOfImplementation': {'time': 4, 'knowledge': 2, 'resources': 2}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "4",
        "name": "Static analysis for all components/libraries",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:12.6.1"
          }
        ],
        "subdimension": "Static depth for applications"
      },
      {
        "data": "{'risk': ['Parts in the source code of the frontend or middleware have vulnerabilities.'], 'measure': 'Usage of static analysis tools for all parts of the middleware and frontend. Static analysis uses for example string matching algorithms and/or dataflow analysis.', 'dependsOn': ['Static analysis for important client side components', 'Static analysis for important server side components'], 'usefulness': 4, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 1}}",
        "done": 1,
        "implementation": [
          {
            "name": "eslint",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "findsecuritybugs",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "jsprime",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "4",
        "name": "Static analysis for all self written components",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:12.6.1"
          }
        ],
        "subdimension": "Static depth for applications"
      },
      {
        "data": "{'risk': ['Important parts in the source code of the frontend have vulnerabilities.'], 'measure': 'Usage of static analysis tools for important parts of the frontend are used. Static analysis uses for example string matching algorithms and/or dataflow analysis.', 'dependsOn': ['Defined build process'], 'usefulness': 3, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 1}}",
        "done": 1,
        "implementation": [
          {
            "name": "bdd-mobile-security",
            "topics": [],
            "url": "https://github.com/ing-bank/bdd-mobile-security-automation-framework",
            "tags": []
          },
          {
            "name": "eslint",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "findsecuritybugs",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "jsprime",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "3",
        "name": "Static analysis for important client side components",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:12.6.1"
          }
        ],
        "subdimension": "Static depth for applications"
      },
      {
        "data": "{'risk': ['Important parts in the source code of the middleware have vulnerabilities.'], 'measure': 'Usage of static analysis tools for important parts of the middleware are used. Static analysis uses for example string matching algorithms and/or dataflow analysis.', 'dependsOn': ['Defined build process'], 'usefulness': 4, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "eslint",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "findsecuritybugs",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "jsprime",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "2",
        "name": "Static analysis for important server side components",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:12.6.1"
          }
        ],
        "subdimension": "Static depth for applications"
      },
      {
        "data": "{'risk': ['False source code indenting might lead to vulnerabilities.'], 'measure': 'Analysis of compliance to style guides of the source code ensures that source code indenting rules are met.', 'usefulness': 1, 'difficultyOfImplementation': {'time': 1, 'knowledge': 1, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "pmd",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "4",
        "name": "Stylistic analysis",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:12.6.1"
          },
          {
            "name": "iso27001-2017:14.2.1"
          },
          {
            "name": "iso27001-2017:14.2.5"
          }
        ],
        "subdimension": "Static depth for applications"
      },
      {
        "data": "{'risk': ['Client side components might have vulnerabilities.'], 'measure': 'Tests for known vulnerabilities in components of the frontend are performed.', 'dependsOn': ['Defined build process'], 'usefulness': 2, 'difficultyOfImplementation': {'time': 2, 'knowledge': 1, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "npm-audit",
            "topics": [],
            "url": "https://docs.npmjs.com/cli/audit",
            "tags": []
          },
          {
            "name": "retire-js",
            "topics": [],
            "url": "https://github.com/RetireJS/retire.js/",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "3",
        "name": "Test of client side components with known vulnerabilities",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:12.6.1"
          }
        ],
        "subdimension": "Static depth for applications"
      },
      {
        "data": "{'risk': ['Server side components might have vulnerabilities.'], 'measure': 'Tests for known vulnerabilities in server side components (e.g. backend/middleware) are performed.', 'dependsOn': ['Defined build process'], 'usefulness': 5, 'difficultyOfImplementation': {'time': 2, 'knowledge': 1, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "owasp-dependency-che",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "1",
        "name": "Test of server side components with known vulnerabilities",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:12.6.1"
          }
        ],
        "subdimension": "Static depth for applications"
      },
      {
        "data": "{'risk': ['Each vulnerability analyzer has different opportunities. By using just one analyzer, some vulnerabilities might not be found.'], 'measure': 'Usage of multiple static tools to find more vulnerabilities.', 'dependsOn': ['Test of server side components with known vulnerabilities', 'Test of client side components with known vulnerabilities', 'Static analysis for all self written components'], 'usefulness': 1, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 5}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "3",
            "index": 17,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-3-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "4",
        "name": "Usage of multiple analyzers",
        "references": [
          {
            "name": "samm2:V-ST-3-A"
          },
          {
            "name": "iso27001-2017:12.6.1"
          },
          {
            "name": "iso27001-2017:14.2.1"
          },
          {
            "name": "iso27001-2017:14.2.5"
          }
        ],
        "subdimension": "Static depth for applications"
      },
      {
        "data": "{'risk': ['Not aware of attacks happening.'], 'measure': 'Check logs for keywords.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "sigmahq",
            "topics": [],
            "url": "https://github.com/SigmaHQ/sigma",
            "tags": []
          }
        ],
        "samm2": [],
        "dimension": "Test and Verification",
        "level": "3",
        "name": "Analyze logs",
        "references": [],
        "subdimension": "Static depth for infrastructure"
      },
      {
        "data": "{'risk': ['Old container images in production indicate that patch management is not performed and therefore vulnerabilities might exists.'], 'measure': 'Check the image age of containers in production.', 'usefulness': 2, 'difficultyOfImplementation': {'time': 1, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "1",
            "index": 54,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-1-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "3",
        "name": "Check for image lifetime",
        "references": [
          {
            "name": "samm2:V-ST-1-A"
          },
          {
            "name": "iso27001-2017:12.6.1"
          },
          {
            "name": "iso27001-2017:14.2.5"
          }
        ],
        "subdimension": "Static depth for infrastructure"
      },
      {
        "data": "{'risk': ['Known vulnerabilities in infrastructure components like container images might get exploited.'], 'measure': 'Check for known vulnerabilities', 'usefulness': 4, 'difficultyOfImplementation': {'time': 1, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "https-github-com-a",
            "topics": [],
            "url": "https://github.com/aquasecurity/trivy",
            "tags": []
          },
          {
            "name": "registries-like-quay",
            "topics": [],
            "url": "",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "4",
        "name": "Check for known vulnerabilities",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:12.6.1"
          }
        ],
        "subdimension": "Static depth for infrastructure"
      },
      {
        "data": "{'risk': ['Third party might include  malware. Ether due to the maintainer (e.g. typo squatting of an image name and using the wrong image) or by an attacker on behalf of the maintainer with stolen credentials.'], 'measure': 'Check for malware in components (e.g. container images, VM baseline images, libraries).', 'usefulness': 3, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 2}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "3",
        "name": "Check for malware",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:12.2.1"
          }
        ],
        "subdimension": "Static depth for infrastructure"
      },
      {
        "data": "{'risk': ['When a new version of an image is available, it might fix security vulnerabilities.'], 'measure': 'Check for new images of containers in production.', 'usefulness': 2, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 1}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "3",
        "name": "Check for new image version",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:12.6.1"
          },
          {
            "name": "iso27001-2017:14.2.5"
          },
          {
            "name": "iso27001-2017:12.2.1"
          }
        ],
        "subdimension": "Static depth for infrastructure"
      },
      {
        "data": "{'risk': ['TODO.'], 'measure': 'TODO', 'dependsOn': ['Usage of a maximum lifetime for images'], 'usefulness': 1, 'difficultyOfImplementation': {'time': 5, 'knowledge': 2, 'resources': 4}}",
        "done": 0,
        "implementation": [
          {
            "name": "anchore-io",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "clair",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "openscap",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "vuls",
            "topics": [],
            "url": "https://github.com/future-architect/vuls",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 54,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-1-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "4",
        "name": "Correlate known vulnerabilities in infrastructure with new image versions",
        "references": [
          {
            "name": "samm2:V-ST-1-A"
          },
          {
            "name": "iso27001-2017:12.6.1"
          },
          {
            "name": "iso27001-2017:14.2.1"
          }
        ],
        "subdimension": "Static depth for infrastructure"
      },
      {
        "data": "{'risk': [\"Stored secrets in git history, in container images or directly in code shouldn't exists because they might be exposed to unauthorized parties.\"], 'measure': 'Test for secrets in code, container images and history', 'usefulness': 2, 'difficultyOfImplementation': {'time': 1, 'knowledge': 2, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "go-pillage-registrie",
            "topics": [],
            "url": "https://github.com/nccgroup/go-pillage-registries",
            "tags": []
          },
          {
            "name": "trufflehog",
            "topics": [],
            "url": "https://github.com/dxa4481/truffleHog",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 54,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-1-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "1",
        "name": "Stored Secrets",
        "references": [
          {
            "name": "samm2:V-ST-1-A"
          },
          {
            "name": "iso27001-2017:vcs usage is not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:9.4.3"
          },
          {
            "name": "iso27001-2017:10.1.2"
          }
        ],
        "subdimension": "Static depth for infrastructure"
      },
      {
        "data": "{'risk': ['The deployment configuration (e.g. kubernetes deployment resources) might contain unsecured configurations.'], 'measure': 'Test the deployment configuration for virtualized environments for unsecured configurations.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 1, 'knowledge': 2, 'resources': 2}}",
        "done": 1,
        "implementation": [
          {
            "name": "kubesec",
            "topics": [],
            "url": "https://kubesec.io/",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 54,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-1-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "2",
        "name": "Test cluster deployment resources",
        "references": [
          {
            "name": "samm2:V-ST-1-A"
          },
          {
            "name": "iso27001-2017:system hardening is not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:12.6.1"
          },
          {
            "name": "iso27001-2017:14.2.3"
          },
          {
            "name": "iso27001-2017:14.2.8"
          }
        ],
        "subdimension": "Static depth for infrastructure"
      },
      {
        "data": "{'risk': ['Infrastructure components might have vulnerabilities.'], 'measure': \"Test for known vulnerabilities in infrastructure components. Often, the only way to respond to known vulnerabilities in operating system packages is to accept the risk and wait for a patch. As the patch needs to be applied fast when it is available, this activity depends on 'Usage of a maximum life for images'.\", 'dependsOn': ['Usage of a maximum lifetime for images'], 'usefulness': 1, 'difficultyOfImplementation': {'time': 5, 'knowledge': 2, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "anchore-io",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "clair",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "openscap",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "vuls",
            "topics": [],
            "url": "https://github.com/future-architect/vuls",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 54,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-1-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "4",
        "name": "Test of infrastructure components for known vulnerabilities",
        "references": [
          {
            "name": "samm2:V-ST-1-A"
          },
          {
            "name": "iso27001-2017:12.6.1"
          },
          {
            "name": "iso27001-2017:14.2.1"
          }
        ],
        "subdimension": "Static depth for infrastructure"
      },
      {
        "data": "{'risk': ['Virtualized environments (e.g. via <i>Container Images</i>) might contains unsecure configurations.'], 'measure': 'Test virtualized environments for unsecured configurations.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 1, 'knowledge': 2, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "cluster-scanner-wil",
            "topics": [],
            "url": "",
            "tags": []
          },
          {
            "name": "dive-to-inspect-a-co",
            "topics": [],
            "url": "https://github.com/wagoodman/dive",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 54,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-1-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "2",
        "name": "Test of virtualized environments",
        "references": [
          {
            "name": "samm2:V-ST-1-A"
          }
        ],
        "subdimension": "Static depth for infrastructure"
      },
      {
        "data": "{'risk': ['Standard hardening practices for cloud environments are not performed leading to vulnerabilities.'], 'measure': 'With the help of tools, the configuration of virtual environments are tested.', 'usefulness': 4, 'difficultyOfImplementation': {'time': 2, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [
          {
            "name": "kube-bench",
            "topics": [],
            "url": "https://github.com/aquasecurity/kube-bench",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 54,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-1-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "2",
        "name": "Test the cloud configuration",
        "references": [
          {
            "name": "samm2:V-ST-1-A"
          },
          {
            "name": "iso27001-2017:system hardening is not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:12.6.1"
          },
          {
            "name": "iso27001-2017:14.2.3"
          },
          {
            "name": "iso27001-2017:14.2.8"
          }
        ],
        "subdimension": "Static depth for infrastructure"
      },
      {
        "data": "{'risk': ['The definition of virtualized environments (e.g. via <i>Dockerfile</i>) might contain unsecure configurations.'], 'measure': 'Test the definition of virtualized environments for unsecured configurations.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 1, 'knowledge': 2, 'resources': 2}}",
        "done": 0,
        "implementation": [
          {
            "name": "deployment-with-kube",
            "topics": [],
            "url": "https://github.com/zegl/kube-score",
            "tags": []
          },
          {
            "name": "dockerfile-with-hado",
            "topics": [],
            "url": "https://github.com/hadolint/hadolint",
            "tags": []
          }
        ],
        "samm2": [
          {
            "maturity": "1",
            "index": 54,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-1-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "2",
        "name": "Test the definition of virtualized environments",
        "references": [
          {
            "name": "samm2:V-ST-1-A"
          },
          {
            "name": "iso27001-2017:system hardening, virtual environments are not explicitly covered by ISO 27001 - too specific"
          },
          {
            "name": "iso27001-2017:12.6.1"
          },
          {
            "name": "iso27001-2017:14.2.3"
          },
          {
            "name": "iso27001-2017:14.2.8"
          },
          {
            "name": "iso27001-2017:14.2.1"
          }
        ],
        "subdimension": "Static depth for infrastructure"
      },
      {
        "data": "{'risk': ['Scans might use a too small or too high test intensity.'], 'measure': 'A testing concept considering the amount of time per scan/intensity is created and applied. A dynamic analysis needs more time than a static analysis. The dynamic scan, depending on the test intensity might be performed on every commit, every night, every week or once in a month.', 'usefulness': 2, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 3}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "3",
        "name": "Creation and application of a testing concept",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:14.2.2"
          },
          {
            "name": "iso27001-2017:14.2.3"
          },
          {
            "name": "iso27001-2017:14.2.1"
          },
          {
            "name": "iso27001-2017:14.2.5"
          },
          {
            "name": "iso27001-2017:12.6.1"
          }
        ],
        "subdimension": "Test-Intensity"
      },
      {
        "data": "{'risk': ['As tools cover a wide range of different vulnerability tests, they might not match the used components. Therefore, they need more time and resources as they need and the feedback loops takes too much time.'], 'measure': \"Unneeded tests are deactivated. For example in case the service is using a Mongo database and no mysql database, the dynamic scan doesn't need to test for sql injections.\", 'usefulness': 1, 'difficultyOfImplementation': {'time': 3, 'knowledge': 2, 'resources': 1}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "2",
        "name": "Deactivating of unneeded tests",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:12.6.1"
          },
          {
            "name": "iso27001-2017:14.2.1"
          },
          {
            "name": "iso27001-2017:14.2.5"
          }
        ],
        "subdimension": "Test-Intensity"
      },
      {
        "data": "{'risk': ['Time pressure and ignorance might lead to false predictions for the test intensity.'], 'measure': 'The intensity of the used tools are not modified to safe time.', 'usefulness': 1, 'difficultyOfImplementation': {'time': 1, 'knowledge': 1, 'resources': 1}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "1",
            "index": 54,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-1-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "1",
        "name": "Default settings for intensity",
        "references": [
          {
            "name": "samm2:V-ST-1-A"
          },
          {
            "name": "iso27001-2017:12.6.1"
          },
          {
            "name": "iso27001-2017:14.2.1"
          },
          {
            "name": "iso27001-2017:14.2.5"
          }
        ],
        "subdimension": "Test-Intensity"
      },
      {
        "data": "{'risk': ['A too small intensity or a too high confidence might lead to not visible vulnerabilities.'], 'measure': 'A deep scan with high test intensity and a low confidence threshold is performed.', 'usefulness': 3, 'difficultyOfImplementation': {'time': 3, 'knowledge': 3, 'resources': 5}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "2",
            "index": 22,
            "practice": "Security Testing",
            "stream": "Scalable Baseline",
            "function": "Verification",
            "id": "V-ST-2-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "1",
        "name": "High test intensity",
        "references": [
          {
            "name": "samm2:V-ST-2-A"
          },
          {
            "name": "iso27001-2017:12.6.1"
          },
          {
            "name": "iso27001-2017:14.2.1"
          },
          {
            "name": "iso27001-2017:14.2.5"
          }
        ],
        "subdimension": "Test-Intensity"
      },
      {
        "data": "{'risk': ['After pushing source code to the version control system, any delay in receiving feedback on defects makes them harder for the developer to remediate.'], 'measure': 'On each push and/or at given intervals automatic security tests are performed.', 'usefulness': 2, 'difficultyOfImplementation': {'time': 1, 'knowledge': 1, 'resources': 1}}",
        "done": 0,
        "implementation": [],
        "samm2": [
          {
            "maturity": "3",
            "index": 26,
            "practice": "Secure Build",
            "stream": "Build Process",
            "function": "Implementation",
            "id": "I-SB-3-A"
          }
        ],
        "dimension": "Test and Verification",
        "level": "2",
        "name": "Regular tests",
        "references": [
          {
            "name": "samm2:I-SB-3-A"
          },
          {
            "name": "iso27001-2017:14.2.3"
          },
          {
            "name": "iso27001-2017:14.2.8"
          },
          {
            "name": "iso27001-2017:14.2.9"
          }
        ],
        "subdimension": "Test-Intensity"
      }
    ],
    "references": [
      {
        "description": "",
        "name": "iso27001-2017"
      },
      {
        "description": "",
        "name": "samm2"
      }
    ],
    "samm2": [
      {
        "function": "Implementation",
        "id": "I-SD-1-A",
        "index": 0,
        "maturity": "1",
        "practice": "Secure Deployment",
        "stream": "Deployment Process"
      },
      {
        "function": "Implementation",
        "id": "I-SB-3-B",
        "index": 1,
        "maturity": "3",
        "practice": "Secure Build",
        "stream": "Software Dependencies"
      },
      {
        "function": "Design",
        "id": "D-SA-3-B",
        "index": 2,
        "maturity": "3",
        "practice": "Security Architecture",
        "stream": "Technology Management"
      },
      {
        "function": "Implementation",
        "id": "I-SB-2-B",
        "index": 3,
        "maturity": "2",
        "practice": "Secure Build",
        "stream": "Software Dependencies"
      },
      {
        "function": "Implementation",
        "id": "I-SD-2-B",
        "index": 4,
        "maturity": "2",
        "practice": "Secure Deployment",
        "stream": "Secret Management"
      },
      {
        "function": "Operations",
        "id": "O-EM-2-A",
        "index": 5,
        "maturity": "2",
        "practice": "Environment Management",
        "stream": "Configuration Hardening"
      },
      {
        "function": "Design",
        "id": "D-SR-3-B",
        "index": 6,
        "maturity": "3",
        "practice": "Security Requirements",
        "stream": "Supplier Security"
      },
      {
        "function": "Governance",
        "id": "G-SM-1-B",
        "index": 7,
        "maturity": "1",
        "practice": "Strategy & Metrics",
        "stream": "Measure and Improve"
      },
      {
        "function": "Operations",
        "id": "O-OM-1-A",
        "index": 8,
        "maturity": "1",
        "practice": "Operational Management",
        "stream": "Data Protection"
      },
      {
        "function": "Design",
        "id": "D-TA-1-A",
        "index": 9,
        "maturity": "1",
        "practice": "Threat Assessment",
        "stream": "Application Risk Profile"
      },
      {
        "function": "Verification",
        "id": "V-AA-3-B",
        "index": 10,
        "maturity": "3",
        "practice": "Architecture Assessment",
        "stream": "Architecture Mitigation"
      },
      {
        "function": "Verification",
        "id": "V-ST-2-B",
        "index": 11,
        "maturity": "2",
        "practice": "Security Testing",
        "stream": "Deep Understanding"
      },
      {
        "function": "Verification",
        "id": "V-ST-1-B",
        "index": 12,
        "maturity": "1",
        "practice": "Security Testing",
        "stream": "Deep Understanding"
      },
      {
        "function": "Governance",
        "id": "G-EG-2-A",
        "index": 13,
        "maturity": "2",
        "practice": "Education & Guidance",
        "stream": "Training and Awareness"
      },
      {
        "function": "Implementation",
        "id": "I-SB-1-B",
        "index": 14,
        "maturity": "1",
        "practice": "Secure Build",
        "stream": "Software Dependencies"
      },
      {
        "function": "Verification",
        "id": "V-RT-1-B",
        "index": 15,
        "maturity": "1",
        "practice": "Requirements-driven Testing",
        "stream": "Misuse/Abuse Testing"
      },
      {
        "function": "Governance",
        "id": "G-PC-3-B",
        "index": 16,
        "maturity": "3",
        "practice": "Policy & Compliance",
        "stream": "Compliance Management"
      },
      {
        "function": "Verification",
        "id": "V-ST-3-A",
        "index": 17,
        "maturity": "3",
        "practice": "Security Testing",
        "stream": "Scalable Baseline"
      },
      {
        "function": "Operations",
        "id": "O-OM-3-B",
        "index": 18,
        "maturity": "3",
        "practice": "Operational Management",
        "stream": "System Decomissioning / Legacy Management"
      },
      {
        "function": "Governance",
        "id": "G-EG-1-A",
        "index": 19,
        "maturity": "1",
        "practice": "Education & Guidance",
        "stream": "Training and Awareness"
      },
      {
        "function": "Governance",
        "id": "G-SM-2-A",
        "index": 20,
        "maturity": "2",
        "practice": "Strategy & Metrics",
        "stream": "Create and Promote"
      },
      {
        "function": "Design",
        "id": "D-TA-2-A",
        "index": 21,
        "maturity": "2",
        "practice": "Threat Assessment",
        "stream": "Application Risk Profile"
      },
      {
        "function": "Verification",
        "id": "V-ST-2-A",
        "index": 22,
        "maturity": "2",
        "practice": "Security Testing",
        "stream": "Scalable Baseline"
      },
      {
        "function": "Governance",
        "id": "G-SM-2-B",
        "index": 23,
        "maturity": "2",
        "practice": "Strategy & Metrics",
        "stream": "Measure and Improve"
      },
      {
        "function": "Design",
        "id": "D-SR-2-A",
        "index": 24,
        "maturity": "2",
        "practice": "Security Requirements",
        "stream": "Software Requirements"
      },
      {
        "function": "Operations",
        "id": "O-IM-3-A",
        "index": 25,
        "maturity": "3",
        "practice": "Incident Management",
        "stream": "Incident Detection"
      },
      {
        "function": "Implementation",
        "id": "I-SB-3-A",
        "index": 26,
        "maturity": "3",
        "practice": "Secure Build",
        "stream": "Build Process"
      },
      {
        "function": "Verification",
        "id": "V-AA-1-A",
        "index": 27,
        "maturity": "1",
        "practice": "Architecture Assessment",
        "stream": "Architecture Validation"
      },
      {
        "function": "Operations",
        "id": "O-EM-1-A",
        "index": 28,
        "maturity": "1",
        "practice": "Environment Management",
        "stream": "Configuration Hardening"
      },
      {
        "function": "Governance",
        "id": "G-PC-2-A",
        "index": 29,
        "maturity": "2",
        "practice": "Policy & Compliance",
        "stream": "Policy & Standards"
      },
      {
        "function": "Design",
        "id": "D-SR-1-B",
        "index": 30,
        "maturity": "1",
        "practice": "Security Requirements",
        "stream": "Supplier Security"
      },
      {
        "function": "Verification",
        "id": "V-RT-1-A",
        "index": 31,
        "maturity": "1",
        "practice": "Requirements-driven Testing",
        "stream": "Control Verification"
      },
      {
        "function": "Governance",
        "id": "G-SM-1-A",
        "index": 32,
        "maturity": "1",
        "practice": "Strategy & Metrics",
        "stream": "Create and Promote"
      },
      {
        "function": "Implementation",
        "id": "I-SB-1-A",
        "index": 33,
        "maturity": "1",
        "practice": "Secure Build",
        "stream": "Build Process"
      },
      {
        "function": "Implementation",
        "id": "I-DM-1-B",
        "index": 34,
        "maturity": "1",
        "practice": "Defect Management",
        "stream": "Metrics and Feedback"
      },
      {
        "function": "Governance",
        "id": "G-SM-3-B",
        "index": 35,
        "maturity": "3",
        "practice": "Strategy & Metrics",
        "stream": "Measure and Improve"
      },
      {
        "function": "Operations",
        "id": "O-IM-3-B",
        "index": 36,
        "maturity": "3",
        "practice": "Incident Management",
        "stream": "Incident Response"
      },
      {
        "function": "Operations",
        "id": "O-IM-1-B",
        "index": 37,
        "maturity": "1",
        "practice": "Incident Management",
        "stream": "Incident Response"
      },
      {
        "function": "Operations",
        "id": "O-OM-3-A",
        "index": 38,
        "maturity": "3",
        "practice": "Operational Management",
        "stream": "Data Protection"
      },
      {
        "function": "Operations",
        "id": "O-IM-2-A",
        "index": 39,
        "maturity": "2",
        "practice": "Incident Management",
        "stream": "Incident Detection"
      },
      {
        "function": "Operations",
        "id": "O-OM-1-B",
        "index": 40,
        "maturity": "1",
        "practice": "Operational Management",
        "stream": "System Decomissioning / Legacy Management"
      },
      {
        "function": "Design",
        "id": "D-SA-2-A",
        "index": 41,
        "maturity": "2",
        "practice": "Security Architecture",
        "stream": "Architecture Design"
      },
      {
        "function": "Governance",
        "id": "G-PC-1-A",
        "index": 42,
        "maturity": "1",
        "practice": "Policy & Compliance",
        "stream": "Policy & Standards"
      },
      {
        "function": "Implementation",
        "id": "I-SB-2-A",
        "index": 43,
        "maturity": "2",
        "practice": "Secure Build",
        "stream": "Build Process"
      },
      {
        "function": "Governance",
        "id": "G-EG-3-B",
        "index": 44,
        "maturity": "3",
        "practice": "Education & Guidance",
        "stream": "Organization and Culture"
      },
      {
        "function": "Design",
        "id": "D-SA-1-B",
        "index": 45,
        "maturity": "1",
        "practice": "Security Architecture",
        "stream": "Technology Management"
      },
      {
        "function": "Design",
        "id": "D-TA-3-B",
        "index": 46,
        "maturity": "3",
        "practice": "Threat Assessment",
        "stream": "Threat Modeling"
      },
      {
        "function": "Design",
        "id": "D-SA-1-A",
        "index": 47,
        "maturity": "1",
        "practice": "Security Architecture",
        "stream": "Architecture Design"
      },
      {
        "function": "Operations",
        "id": "O-OM-2-B",
        "index": 48,
        "maturity": "2",
        "practice": "Operational Management",
        "stream": "System Decomissioning / Legacy Management"
      },
      {
        "function": "Governance",
        "id": "G-PC-2-B",
        "index": 49,
        "maturity": "2",
        "practice": "Policy & Compliance",
        "stream": "Compliance Management"
      },
      {
        "function": "Operations",
        "id": "O-EM-2-B",
        "index": 50,
        "maturity": "2",
        "practice": "Environment Management",
        "stream": "Patching and Updating"
      },
      {
        "function": "Operations",
        "id": "O-IM-2-B",
        "index": 51,
        "maturity": "2",
        "practice": "Incident Management",
        "stream": "Incident Response"
      },
      {
        "function": "Implementation",
        "id": "I-SD-2-A",
        "index": 52,
        "maturity": "2",
        "practice": "Secure Deployment",
        "stream": "Deployment Process"
      },
      {
        "function": "Operations",
        "id": "O-EM-3-B",
        "index": 53,
        "maturity": "3",
        "practice": "Environment Management",
        "stream": "Patching and Updating"
      },
      {
        "function": "Verification",
        "id": "V-ST-1-A",
        "index": 54,
        "maturity": "1",
        "practice": "Security Testing",
        "stream": "Scalable Baseline"
      },
      {
        "function": "Verification",
        "id": "V-AA-3-A",
        "index": 55,
        "maturity": "3",
        "practice": "Architecture Assessment",
        "stream": "Architecture Validation"
      },
      {
        "function": "Implementation",
        "id": "I-DM-2-B",
        "index": 56,
        "maturity": "2",
        "practice": "Defect Management",
        "stream": "Metrics and Feedback"
      },
      {
        "function": "Operations",
        "id": "O-IM-1-A",
        "index": 57,
        "maturity": "1",
        "practice": "Incident Management",
        "stream": "Incident Detection"
      },
      {
        "function": "Verification",
        "id": "V-ST-3-B",
        "index": 58,
        "maturity": "3",
        "practice": "Security Testing",
        "stream": "Deep Understanding"
      },
      {
        "function": "Implementation",
        "id": "I-DM-1-A",
        "index": 59,
        "maturity": "1",
        "practice": "Defect Management",
        "stream": "Defect Tracking"
      },
      {
        "function": "Design",
        "id": "D-SA-2-B",
        "index": 60,
        "maturity": "2",
        "practice": "Security Architecture",
        "stream": "Technology Management"
      },
      {
        "function": "Verification",
        "id": "V-AA-1-B",
        "index": 61,
        "maturity": "1",
        "practice": "Architecture Assessment",
        "stream": "Architecture Mitigation"
      },
      {
        "function": "Governance",
        "id": "G-SM-3-A",
        "index": 62,
        "maturity": "3",
        "practice": "Strategy & Metrics",
        "stream": "Create and Promote"
      },
      {
        "function": "Design",
        "id": "D-SA-3-A",
        "index": 63,
        "maturity": "3",
        "practice": "Security Architecture",
        "stream": "Architecture Design"
      },
      {
        "function": "Design",
        "id": "D-TA-3-A",
        "index": 64,
        "maturity": "3",
        "practice": "Threat Assessment",
        "stream": "Application Risk Profile"
      },
      {
        "function": "Governance",
        "id": "G-EG-1-B",
        "index": 65,
        "maturity": "1",
        "practice": "Education & Guidance",
        "stream": "Organization and Culture"
      },
      {
        "function": "Governance",
        "id": "G-PC-3-A",
        "index": 66,
        "maturity": "3",
        "practice": "Policy & Compliance",
        "stream": "Policy & Standards"
      },
      {
        "function": "Governance",
        "id": "G-EG-2-B",
        "index": 67,
        "maturity": "2",
        "practice": "Education & Guidance",
        "stream": "Organization and Culture"
      },
      {
        "function": "Verification",
        "id": "V-RT-3-A",
        "index": 68,
        "maturity": "3",
        "practice": "Requirements-driven Testing",
        "stream": "Control Verification"
      },
      {
        "function": "Governance",
        "id": "G-PC-1-B",
        "index": 69,
        "maturity": "1",
        "practice": "Policy & Compliance",
        "stream": "Compliance Management"
      },
      {
        "function": "Implementation",
        "id": "I-DM-2-A",
        "index": 70,
        "maturity": "2",
        "practice": "Defect Management",
        "stream": "Defect Tracking"
      },
      {
        "function": "Operations",
        "id": "O-OM-2-A",
        "index": 71,
        "maturity": "2",
        "practice": "Operational Management",
        "stream": "Data Protection"
      },
      {
        "function": "Implementation",
        "id": "I-SD-1-B",
        "index": 72,
        "maturity": "1",
        "practice": "Secure Deployment",
        "stream": "Secret Management"
      },
      {
        "function": "Design",
        "id": "D-TA-1-B",
        "index": 73,
        "maturity": "1",
        "practice": "Threat Assessment",
        "stream": "Threat Modeling"
      },
      {
        "function": "Governance",
        "id": "G-EG-3-A",
        "index": 74,
        "maturity": "3",
        "practice": "Education & Guidance",
        "stream": "Training and Awareness"
      },
      {
        "function": "Verification",
        "id": "V-RT-2-B",
        "index": 75,
        "maturity": "2",
        "practice": "Requirements-driven Testing",
        "stream": "Misuse/Abuse Testing"
      },
      {
        "function": "Design",
        "id": "D-SR-1-A",
        "index": 76,
        "maturity": "1",
        "practice": "Security Requirements",
        "stream": "Software Requirements"
      },
      {
        "function": "Verification",
        "id": "V-AA-2-A",
        "index": 77,
        "maturity": "2",
        "practice": "Architecture Assessment",
        "stream": "Architecture Validation"
      },
      {
        "function": "Implementation",
        "id": "I-DM-3-A",
        "index": 78,
        "maturity": "3",
        "practice": "Defect Management",
        "stream": "Defect Tracking"
      },
      {
        "function": "Design",
        "id": "D-SR-2-B",
        "index": 79,
        "maturity": "2",
        "practice": "Security Requirements",
        "stream": "Supplier Security"
      },
      {
        "function": "Verification",
        "id": "V-AA-2-B",
        "index": 80,
        "maturity": "2",
        "practice": "Architecture Assessment",
        "stream": "Architecture Mitigation"
      },
      {
        "function": "Design",
        "id": "D-SR-3-A",
        "index": 81,
        "maturity": "3",
        "practice": "Security Requirements",
        "stream": "Software Requirements"
      },
      {
        "function": "Verification",
        "id": "V-RT-3-B",
        "index": 82,
        "maturity": "3",
        "practice": "Requirements-driven Testing",
        "stream": "Misuse/Abuse Testing"
      },
      {
        "function": "Operations",
        "id": "O-EM-3-A",
        "index": 83,
        "maturity": "3",
        "practice": "Environment Management",
        "stream": "Configuration Hardening"
      },
      {
        "function": "Implementation",
        "id": "I-SD-3-A",
        "index": 84,
        "maturity": "3",
        "practice": "Secure Deployment",
        "stream": "Deployment Process"
      },
      {
        "function": "Design",
        "id": "D-TA-2-B",
        "index": 85,
        "maturity": "2",
        "practice": "Threat Assessment",
        "stream": "Threat Modeling"
      },
      {
        "function": "Implementation",
        "id": "I-SD-3-B",
        "index": 86,
        "maturity": "3",
        "practice": "Secure Deployment",
        "stream": "Secret Management"
      },
      {
        "function": "Implementation",
        "id": "I-DM-3-B",
        "index": 87,
        "maturity": "3",
        "practice": "Defect Management",
        "stream": "Metrics and Feedback"
      },
      {
        "function": "Verification",
        "id": "V-RT-2-A",
        "index": 88,
        "maturity": "2",
        "practice": "Requirements-driven Testing",
        "stream": "Control Verification"
      },
      {
        "function": "Operations",
        "id": "O-EM-1-B",
        "index": 89,
        "maturity": "1",
        "practice": "Environment Management",
        "stream": "Patching and Updating"
      }
    ],
    "implementations": [
      {
        "name": "a-complete-backup-of",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "a-point-in-time-reco",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "ajax-spider",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "anchore-io",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "ansible",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "arachni",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "attack-matrix-cloud",
        "tags": [
          "mitre"
        ],
        "topics": [],
        "url": "https://attack.mitre.org/matrices/enterprise/cloud/"
      },
      {
        "name": "attack-matrix-contai",
        "tags": [
          "mitre"
        ],
        "topics": [],
        "url": "https://attack.mitre.org/matrices/enterprise/cloud/"
      },
      {
        "name": "attack-matrix-kubern",
        "tags": [
          "mitre"
        ],
        "topics": [],
        "url": "https://www.microsoft.com/security/blog/2020/04/02/attack-matrix-kubernetes/"
      },
      {
        "name": "authentication",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "bash",
        "tags": [
          "tool"
        ],
        "topics": [],
        "url": ""
      },
      {
        "name": "bdd-mobile-security",
        "tags": [],
        "topics": [],
        "url": "https://github.com/ing-bank/bdd-mobile-security-automation-framework"
      },
      {
        "name": "blue-green-deploymen",
        "tags": [],
        "topics": [],
        "url": "https://martinfowler.com/bliki/BlueGreenDeployment.html"
      },
      {
        "name": "bridges",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "build-it-break-it-fi",
        "tags": [],
        "topics": [],
        "url": "https://builditbreakit.org/"
      },
      {
        "name": "chef",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "ci-cd-tools",
        "tags": [
          "ci-cd"
        ],
        "topics": [],
        "url": ""
      },
      {
        "name": "cis-docker-bench-for",
        "tags": [],
        "topics": [],
        "url": "https://www.cisecurity.org/cis-benchmarks/"
      },
      {
        "name": "cis-kubernetes-bench",
        "tags": [],
        "topics": [],
        "url": "https://www.cisecurity.org/cis-benchmarks/"
      },
      {
        "name": "clair",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "cluster-scanner-wil",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "collected",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "container-technologi",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "crypto",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "curl",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "damn-vulnerable-web",
        "tags": [
          "training"
        ],
        "topics": [],
        "url": ""
      },
      {
        "name": "dast",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "dependabot",
        "tags": [],
        "topics": [],
        "url": "https://dependabot.com/"
      },
      {
        "name": "deployment-with-kube",
        "tags": [],
        "topics": [],
        "url": "https://github.com/zegl/kube-score"
      },
      {
        "name": "directory-service",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "distroless",
        "tags": [],
        "topics": [],
        "url": "https://github.com/GoogleContainerTools/distroless"
      },
      {
        "name": "dive-to-inspect-a-co",
        "tags": [],
        "topics": [],
        "url": "https://github.com/wagoodman/dive"
      },
      {
        "name": "docker",
        "tags": [],
        "topics": [],
        "url": "https://github.com/moby/moby"
      },
      {
        "name": "docker-content-trust",
        "tags": [],
        "topics": [],
        "url": "https://docs.docker.com/notary/getting_started/"
      },
      {
        "name": "dockerfile-with-hado",
        "tags": [],
        "topics": [],
        "url": "https://github.com/hadolint/hadolint"
      },
      {
        "name": "don-t-forget-evil-u",
        "tags": [],
        "topics": [],
        "url": "https://www.owasp.org/index.php/Agile_Software_Development"
      },
      {
        "name": "draw-io",
        "tags": [
          "defender",
          "threat-modeling",
          "whiteboard"
        ],
        "topics": [],
        "url": "https://github.com/jgraph/drawio-desktop"
      },
      {
        "name": "elk-stack",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "eslint",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "example-all-docker",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "fedora-coreos",
        "tags": [],
        "topics": [],
        "url": "https://getfedora.org/coreos"
      },
      {
        "name": "findsecuritybugs",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "firewalls",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "fluentd",
        "tags": [
          "tool"
        ],
        "topics": [],
        "url": ""
      },
      {
        "name": "for-applications-ch",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "for-example-for-cont",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "gitops",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "go-pillage-registrie",
        "tags": [],
        "topics": [],
        "url": "https://github.com/nccgroup/go-pillage-registries"
      },
      {
        "name": "htc-hydra",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "http-basic-authentic",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "https-cheatsheetse",
        "tags": [
          "training",
          "secure coding"
        ],
        "topics": [],
        "url": "https://cheatsheetseries.owasp.org/"
      },
      {
        "name": "https-github-com-a",
        "tags": [],
        "topics": [],
        "url": "https://github.com/aquasecurity/trivy"
      },
      {
        "name": "https-ht-transpare",
        "tags": [],
        "topics": [],
        "url": "https://ht.transparencytoolkit.org/FileServer/FileServer/OLD"
      },
      {
        "name": "httpunit",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "in-toto",
        "tags": [],
        "topics": [],
        "url": "https://in-toto.github.io/"
      },
      {
        "name": "involve-security-sme",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "istio",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "jenkins",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "jenkinsfile",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "jsprime",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "junit",
        "tags": [
          "unittest"
        ],
        "topics": [],
        "url": ""
      },
      {
        "name": "k8spurger",
        "tags": [
          "vulnerability",
          "scanner",
          "dast",
          "infrastrcture"
        ],
        "topics": [],
        "url": "https://github.com/yogeshkk/K8sPurger"
      },
      {
        "name": "karma",
        "tags": [],
        "topics": [],
        "url": "https://karma-runner.github.io"
      },
      {
        "name": "kube-bench",
        "tags": [],
        "topics": [],
        "url": "https://github.com/aquasecurity/kube-bench"
      },
      {
        "name": "kube-hunter",
        "tags": [],
        "topics": [],
        "url": "https://github.com/aquasecurity/kube-hunter"
      },
      {
        "name": "kubernetes-admission",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "kubesec",
        "tags": [],
        "topics": [],
        "url": "https://kubesec.io/"
      },
      {
        "name": "logparser-jenkins-pl",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "logstash",
        "tags": [
          "tool",
          "logging"
        ],
        "topics": [],
        "url": "https://www.elastic.co/guide/en/logstash/current/getting-started-with-logstash.html"
      },
      {
        "name": "managing-secrets",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "miro-or-any-other-c",
        "tags": [
          "defender",
          "threat-modeling",
          "collaboration",
          "whiteboard"
        ],
        "topics": [],
        "url": "https://miro.com/"
      },
      {
        "name": "motivate-people",
        "tags": [
          "security champions",
          "gamification",
          "nudging"
        ],
        "topics": [],
        "url": "https://github.com/wurstbrot/security-pins"
      },
      {
        "name": "netassert",
        "tags": [],
        "topics": [],
        "url": "https://github.com/controlplaneio/netassert"
      },
      {
        "name": "nmap",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "npm-audit",
        "tags": [],
        "topics": [],
        "url": "https://docs.npmjs.com/cli/audit"
      },
      {
        "name": "open-policy-agent",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "openapi",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "openscap",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "openvas",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "owasp-amass",
        "tags": [],
        "topics": [],
        "url": "https://github.com/OWASP/Amass"
      },
      {
        "name": "owasp-asvs",
        "tags": [],
        "topics": [],
        "url": "https://owasp.org/www-project-application-security-verification-standard/"
      },
      {
        "name": "owasp-cheatsheet-ser",
        "tags": [
          "secure coding"
        ],
        "topics": [],
        "url": "https://cheatsheetseries.owasp.org/"
      },
      {
        "name": "owasp-code-pulse",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "owasp-defect-dojo",
        "tags": [],
        "topics": [],
        "url": "https://github.com/DefectDojo/django-DefectDojo"
      },
      {
        "name": "owasp-defectdojo",
        "tags": [
          "vulnerability management system",
          "owasp"
        ],
        "topics": [],
        "url": "https://github.com/DefectDojo/django-DefectDojo"
      },
      {
        "name": "owasp-dependency-che",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "owasp-juice-shop",
        "tags": [
          "training"
        ],
        "topics": [],
        "url": "https://github.com/bkimminich/juice-shop"
      },
      {
        "name": "owasp-juiceshop",
        "tags": [],
        "topics": [],
        "url": "https://github.com/bkimminich/juice-shop"
      },
      {
        "name": "owasp-logging-cheats",
        "tags": [
          "logging",
          "documentation"
        ],
        "topics": [],
        "url": "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html"
      },
      {
        "name": "owasp-masvs",
        "tags": [],
        "topics": [],
        "url": "https://github.com/OWASP/owasp-masvs"
      },
      {
        "name": "owasp-samm",
        "tags": [
          "threat-modeling",
          "owasp",
          "defender"
        ],
        "topics": [],
        "url": "https://owaspsamm.org/model/design/threat-assessment/stream-b/"
      },
      {
        "name": "owasp-securecodebox",
        "tags": [
          "vulnerability",
          "scanner-orchestration"
        ],
        "topics": [],
        "url": "https://github.com/secureCodeBox/secureCodeBox"
      },
      {
        "name": "owasp-security-champ",
        "tags": [
          "security champions"
        ],
        "topics": [],
        "url": "https://github.com/c0rdis/security-champions-playbook"
      },
      {
        "name": "owasp-top-10-maturit",
        "tags": [
          "security champions"
        ],
        "topics": [],
        "url": "https://owaspsamm.org/presentations/OWASP_Top_10_Maturity_Categories_for_Security_Champions.pptx"
      },
      {
        "name": "owasp-zap",
        "tags": [
          "vulnerability",
          "scanner"
        ],
        "topics": [],
        "url": "https://github.com/zaproxy/zaproxy"
      },
      {
        "name": "plugins",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "pmd",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "prometheus",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "puppet",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "purify",
        "tags": [
          "vulnerability management system"
        ],
        "topics": [],
        "url": "https://github.com/faloker/purify/"
      },
      {
        "name": "registries-like-quay",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "remove-direct-access",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "retire-js",
        "tags": [],
        "topics": [],
        "url": "https://github.com/RetireJS/retire.js/"
      },
      {
        "name": "rolling-update",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "rsyslog",
        "tags": [
          "tool",
          "logging"
        ],
        "topics": [],
        "url": "https://www.rsyslog.com/"
      },
      {
        "name": "sample-concept-1",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "sast",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "seccomp",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "see-other-actions-e",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "sigmahq",
        "tags": [],
        "topics": [],
        "url": "https://github.com/SigmaHQ/sigma"
      },
      {
        "name": "smartcard",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "sms",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "strace",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "threagile",
        "tags": [
          "threat-modeling"
        ],
        "topics": [],
        "url": "https://github.com/Threagile/threagile"
      },
      {
        "name": "threat-modeling-play",
        "tags": [
          "owasp",
          "defender",
          "threat-modeling",
          "whiteboard"
        ],
        "topics": [],
        "url": "https://github.com/Toreon/threat-model-playbook"
      },
      {
        "name": "totp",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "trufflehog",
        "tags": [],
        "topics": [],
        "url": "https://github.com/dxa4481/truffleHog"
      },
      {
        "name": "vpn",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "vuls",
        "tags": [],
        "topics": [],
        "url": "https://github.com/future-architect/vuls"
      },
      {
        "name": "webserver",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "whiteboard",
        "tags": [
          "defender",
          "threat-modeling",
          "collaboration",
          "whiteboard"
        ],
        "topics": [],
        "url": "https://en.wikipedia.org/wiki/Whiteboard"
      },
      {
        "name": "yubikey",
        "tags": [],
        "topics": [],
        "url": ""
      },
      {
        "name": "zest",
        "tags": [
          "zap"
        ],
        "topics": [],
        "url": "https://www.zaproxy.org/docs/desktop/addons/zest/"
      }
    ]
  }
}
