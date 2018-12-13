var archi_config = {
    chart: {
        container: '#archiDiagram',

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
              name: 'Architecture'
          },
          HTMLclass: 'accent-color',
          stackChildren:true,
          children: [
                      {
                          text:{
                              name: 'Analyze'
                          },
                          HTMLclass: 'accent-color',
                          link: {
                              href: 'http://www.google.com'
                          }
                      },
                      {
                          text:{
                              name: 'Conception'
                          },
                          HTMLclass: 'accent-color'
                      },
                      {
                          text:{
                              name: 'Technical Recommandation'
                          },
                          HTMLclass: 'accent-color'
                      }
                  ]
    }
};

var devops_config = {
    chart: {
        container: '#devOpsDiagram',

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
              name: 'DevOps'
          },
          HTMLclass: 'dark-primary-color',
          stackChildren:true,
          children: [
                      {
                          text:{
                              name: 'Development Environment',
                              title: 'Setup'

                          },
                          HTMLclass: 'dark-primary-color',
                          link: {
                              href: 'http://www.google.com'
                          }
                      },
                      {
                          text:{
                              name: 'Standard Development',
                              title: 'Rule Configuration'
                          },
                          HTMLclass: 'dark-primary-color'
                      },
                      {
                          text:{
                              name: 'IoC Management'
                          },
                          HTMLclass: 'dark-primary-color'
                      }
                  ]
    }
};

var database_config = {
    chart: {
        container: '#databaseDiagram',

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
              name: 'DataBase'
          },
          HTMLclass: 'light-primary-color',
          stackChildren:true,
          children: [
                      {
                          text:{
                              name: 'MySQL'

                          },
                          HTMLclass: 'light-primary-color',
                          link: {
                              href: 'http://www.google.com'
                          }
                      },
                      {
                          text:{
                              name: 'PostgreSQL'
                          },
                          HTMLclass: 'light-primary-color'
                      },
                      {
                          text:{
                              name: 'Oracle'
                          },
                          HTMLclass: 'light-primary-color'
                      },
                      {
                          text:{
                              name: 'SQL Server'
                          },
                          HTMLclass: 'light-primary-color'
                      },
                      {
                          text:{
                              name: 'Sybase'
                          },
                          HTMLclass: 'light-primary-color'
                      },
                      {
                          text:{
                              name: 'Derby'
                          },
                          HTMLclass: 'light-primary-color'
                      },
                      {
                          text:{
                              name: 'MongoDB'
                          },
                          HTMLclass: 'light-primary-color'
                      },
                      {
                          text:{
                              name: 'CouchBase'
                          },
                          HTMLclass: 'light-primary-color'
                      },
                      {
                          text:{
                              name: 'NoSQL'
                          },
                          HTMLclass: 'light-primary-color'
                      }
                  ]
    }
};
