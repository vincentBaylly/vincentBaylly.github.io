var sys_config = {
  chart: {
    container: '#sysDiagram',

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
      name: 'System'
    },
    HTMLclass: 'sys-diagram-css',
    stackChildren: true,
    children: [{
        text: {
          name: 'Windows'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'UNIX/AIX'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'Debian'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'Ubuntu'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'Mint'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'Centos'
        },
        HTMLclass: 'sys-diagram-css'
      },
    ]
  }
};

var apps_config = {
  chart: {
    container: '#appDiagram',

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
      name: 'Applications'
    },
    HTMLclass: 'sys-diagram-css',
    stackChildren: true,
    children: [{
        text: {
          name: 'Apache'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'Tomcat/TomEE'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'WebLogic'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'JBoss'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'Nginx'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'NodeJS'
        },
        HTMLclass: 'sys-diagram-css'
      }
    ]
  }
};

var tools_config = {
  chart: {
    container: '#toolsDiagram',

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
      name: 'Tools'
    },
    HTMLclass: 'sys-diagram-css',
    stackChildren: true,
    children: [{
        text: {
          name: 'Eclipse/IntelliJ'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'Git/CVS/ClearCase'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'TOAD/SQL Developer'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'Microsoft Office Suites'
        },
        HTMLclass: 'sys-diagram-css'
      },
      {
        text: {
          name: 'Jira'
        },
        HTMLclass: 'sys-diagram-css'
      }
    ]
  }
};
