var frontend_config = {
  chart: {
    container: '#frontendDiagram',
    nodeAlign: 'BOTTOM',
    connectors: {
      type: 'step'
    },
    node: {
      HTMLclass: 'node1'
    }
  },
  nodeStructure: {
    text: {
      name: 'Frontend'
    },
    HTMLclass: 'dev-diagram-css',
    link: {
      href: 'http://www.google.com'
    },
    stackChildren: true,
    children: [{
        text: {
          name: 'HTML/CSS'
        },
        HTMLclass: 'dev-diagram-css'
      },
      {
        text: {
          name: 'JavaScript'
        },
        HTMLclass: 'dev-diagram-css',
      },
      {
        text: {
          name: 'JQuery'
        },
        HTMLclass: 'dev-diagram-css'
      },
      {
        text: {
          name: 'Angular ~7/Angular.JS'
        },
        HTMLclass: 'dev-diagram-css',
      },
      {
        text: {
          name: 'jslint'
        },
        HTMLclass: 'dev-diagram-css'
      },
      {
        text: {
          name: 'karma'
        },
        HTMLclass: 'dev-diagram-css'
      },
      {
        text: {
          name: 'grunt'
        },
        HTMLclass: 'dev-diagram-css'
      },
      {
        text: {
          name: 'express'
        },
        HTMLclass: 'dev-diagram-css'
      }
    ]
  }
};
var backend_config = {
  chart: {
    container: '#backendDiagram',
    nodeAlign: 'BOTTOM',
    connectors: {
      type: 'step'
    },
    node: {
      HTMLclass: 'node1'
    }
  },
  nodeStructure: {
    text: {
      name: 'Backend'
    },
    HTMLclass: 'dev-diagram-css',
    stackChildren: true,
    children: [{
        text: {
          name: 'Java J2EE'
        },
        HTMLclass: 'dev-diagram-css',
      },
      {
        text: {
          name: 'Struts'
        },
        HTMLclass: 'dev-diagram-css'
      },
      {
        text: {
          name: 'Spring'
        },
        HTMLclass: 'dev-diagram-css',
      },
      {
        text: {
          name: 'Spring MVC'
        },
        HTMLclass: 'dev-diagram-css'
      },
      {
        text: {
          name: 'Spring Security'
        },
        HTMLclass: 'dev-diagram-css'
      },
      {
        text: {
          name: 'Hibernate'
        },
        HTMLclass: 'dev-diagram-css'
      }
    ]
  }
};
