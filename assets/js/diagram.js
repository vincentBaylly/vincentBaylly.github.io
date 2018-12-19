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
          HTMLclass: 'archi-diagram-css',
          stackChildren:true,
          children: [
                      {
                          text:{
                              name: 'Analyze'
                          },
                          HTMLclass: 'archi-diagram-css',
                          link: {
                              href: 'http://www.google.com'
                          }
                      },
                      {
                          text:{
                              name: 'Conception'
                          },
                          HTMLclass: 'archi-diagram-css'
                      },
                      {
                          text:{
                              name: 'Technical Recommandation'
                          },
                          HTMLclass: 'archi-diagram-css'
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
          HTMLclass: 'dev-ops-diagram-css',
          stackChildren:true,
          children: [
                      {
                          text:{
                              name: 'Development Environment',
                              title: 'Setup'

                          },
                          HTMLclass: 'dev-ops-diagram-css',
                          link: {
                              href: 'http://www.google.com'
                          }
                      },
                      {
                          text:{
                              name: 'Standard Development',
                              title: 'Rule Configuration'
                          },
                          HTMLclass: 'dev-ops-diagram-css'
                      },
                      {
                          text:{
                              name: 'IoC Management'
                          },
                          HTMLclass: 'dev-ops-diagram-css'
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
          HTMLclass: 'database-diagram-css',
          stackChildren:true,
          children: [
                      {
                          text:{
                              name: 'MySQL'

                          },
                          HTMLclass: 'database-diagram-css',
                          link: {
                              href: 'http://www.google.com'
                          }
                      },
                      {
                          text:{
                              name: 'PostgreSQL'
                          },
                          HTMLclass: 'database-diagram-css'
                      },
                      {
                          text:{
                              name: 'Oracle'
                          },
                          HTMLclass: 'database-diagram-css'
                      },
                      {
                          text:{
                              name: 'SQL Server'
                          },
                          HTMLclass: 'database-diagram-css'
                      },
                      {
                          text:{
                              name: 'Sybase'
                          },
                          HTMLclass: 'database-diagram-css'
                      },
                      {
                          text:{
                              name: 'Derby'
                          },
                          HTMLclass: 'database-diagram-css'
                      },
                      {
                          text:{
                              name: 'MongoDB'
                          },
                          HTMLclass: 'database-diagram-css'
                      },
                      {
                          text:{
                              name: 'CouchBase'
                          },
                          HTMLclass: 'database-diagram-css'
                      },
                      {
                          text:{
                              name: 'NoSQL'
                          },
                          HTMLclass: 'database-diagram-css'
                      }
                  ]
    }
};
