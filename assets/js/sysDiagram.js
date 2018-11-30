var sys_apps_config={
  chart: {
      container: '#sysAppDiagram',

      nodeAlign: 'BOTTOM',

      connectors: {
          type: 'step'
      },
      node: {
          HTMLclass: 'node1'
      }
  },
  nodeStructure: {
    text:{
      name:'System/Apps',
      HTMLclass:'blue',
      children:[
        {
          text:{
            name:'Systems'
          },
          HTMLclass:'blue',
          children:[
            {
              text:{
                name:'Windows'
              },
              HTMLclass:'blue'
            },
            {
              text:{
                name:'UNIX/AIX'
              },
              HTMLclass:'blue'
            },
            {
              text:{
                name:'Linux'
              },
              HTMLclass:'blue',
              stackChildren:true,
              children:[
                {
                  text:{
                    name:'Debian'
                  },
                  HTMLclass:'blue'
                },
                {
                  text:{
                    name:'Ubuntu'
                  },
                  HTMLclass:'blue'
                },
                {
                  text:{
                    name:'Mint'
                  },
                  HTMLclass:'blue'
                },
                {
                  text:{
                    name:'Centos'
                  },
                  HTMLclass:'blue'
                },
              ]
            }
          ]
        },
        {
          text:{
            name:'App server'
          },
          HTMLclass:'blue',
          stackChildren:true,
          children:[

          ]
        },
        {
          text:{
            name:'Tools'
          },
          HTMLclass:'blue',
          stackChildren:true,
          children:[
            {
              text:{
                name:'Eclipse/IntelliJ'
              },
              HTMLclass:'blue'
            },
            {
              text:{
                name:'Git/CVS/ClearCase'
              },
              HTMLclass:'blue'
            },
            {
              text:{
                name:'TOAD/SQL Developer'
              },
              HTMLclass:'blue'
            },
            {
              text:{
                name:'Microsoft Office Suites'
              },
              HTMLclass:'blue'
            },
            {
              text:{
                name:'Jira'
              },
              HTMLclass:'blue'
            }
          ]
        }
      ]
    }
  }
}
