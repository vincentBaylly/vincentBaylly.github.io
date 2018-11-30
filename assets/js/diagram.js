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
          HTMLclass: 'blue',
          stackChildren:true,
          children: [
                      {
                          text:{
                              name: 'Analyze'
                          },
                          HTMLclass: 'blue',
                          link: {
                              href: 'http://www.google.com'
                          }
                      },
                      {
                          text:{
                              name: 'Conception'
                          },
                          HTMLclass: 'blue'
                      },
                      {
                          text:{
                              name: 'Technical Recommandation'
                          },
                          HTMLclass: 'blue'
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
          HTMLclass: 'blue',
          stackChildren:true,
          children: [
                      {
                          text:{
                              name: 'Development Environment',
                              title: 'Setup'

                          },
                          HTMLclass: 'blue',
                          link: {
                              href: 'http://www.google.com'
                          }
                      },
                      {
                          text:{
                              name: 'Standard Development',
                              title: 'Rule Configuration'
                          },
                          HTMLclass: 'blue'
                      },
                      {
                          text:{
                              name: 'IoC Management'
                          },
                          HTMLclass: 'blue'
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
          HTMLclass: 'blue',
          stackChildren:true,
          children: [
                      {
                          text:{
                              name: 'MySQL'

                          },
                          HTMLclass: 'blue',
                          link: {
                              href: 'http://www.google.com'
                          }
                      },
                      {
                          text:{
                              name: 'PostgreSQL'
                          },
                          HTMLclass: 'blue'
                      },
                      {
                          text:{
                              name: 'Oracle'
                          },
                          HTMLclass: 'blue'
                      },
                      {
                          text:{
                              name: 'SQL Server'
                          },
                          HTMLclass: 'blue'
                      },
                      {
                          text:{
                              name: 'Sybase'
                          },
                          HTMLclass: 'blue'
                      },
                      {
                          text:{
                              name: 'Derby'
                          },
                          HTMLclass: 'blue'
                      },
                      {
                          text:{
                              name: 'MongoDB'
                          },
                          HTMLclass: 'blue'
                      },
                      {
                          text:{
                              name: 'CouchBase'
                          },
                          HTMLclass: 'blue'
                      },
                      {
                          text:{
                              name: 'NoSQL'
                          },
                          HTMLclass: 'blue'
                      }
                  ]
    }
};
