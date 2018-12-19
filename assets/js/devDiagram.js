var dev_config = {
    chart: {
        container: '#devDiagram',
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
              name: 'Dev'
          },
          HTMLclass: 'dev-diagram-css',
          children: [
                      {
                          text:{
                              name: 'Frontend'

                          },
                          HTMLclass: 'dev-diagram-css',
                          link: {
                              href: 'http://www.google.com'
                          },
                          children:[
                            {
                                text:{
                                  name:'HTML/CSS'
                                },
                                HTMLclass:'dev-diagram-css'
                            },
                            {
                              text:{
                                name:'JavaScript'
                              },
                              HTMLclass:'dev-diagram-css',
                              children:[
                                {
                                  text:{
                                    name:'JQuery'
                                  },
                                  HTMLclass:'dev-diagram-css'
                                },
                                {
                                  text:{
                                    name:'Angular ~7/Angular.JS'
                                  },
                                  HTMLclass:'dev-diagram-css',
                                  stackChildren:true,
                                  children:[
                                    {
                                      text:{
                                        name:'jslint'
                                      },
                                      HTMLclass:'dev-diagram-css'
                                    },
                                    {
                                      text:{
                                        name:'karma'
                                      },
                                      HTMLclass:'dev-diagram-css'
                                    },
                                    {
                                      text:{
                                        name:'grunt'
                                      },
                                      HTMLclass:'dev-diagram-css'
                                    },
                                    {
                                      text:{
                                        name:'express'
                                      },
                                      HTMLclass:'dev-diagram-css'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                      },
                      {
                          text:{
                              name: 'Backend'
                          },
                          HTMLclass: 'dev-diagram-css',
                          children: [
                            {
                                text:{
                                    name: 'Java J2EE'
                                },
                                HTMLclass: 'dev-diagram-css',
                                stackChildren:true,
                                children: [
                                  {
                                      text:{
                                          name: 'Struts'
                                      },
                                      HTMLclass: 'dev-diagram-css'
                                  },
                                  {
                                      text:{
                                          name: 'Spring'
                                      },
                                      HTMLclass: 'dev-diagram-css',
                                      stackChildren:true,
                                      children:[
                                        {
                                            text:{
                                                name: 'Spring MVC'
                                            },
                                            HTMLclass: 'dev-diagram-css'
                                        },
                                        {
                                            text:{
                                                name: 'Spring Security'
                                            },
                                            HTMLclass: 'dev-diagram-css'
                                        }
                                      ]
                                  },
                                  {
                                      text:{
                                          name: 'Hibernate'
                                      },
                                      HTMLclass: 'dev-diagram-css'
                                  },
                                ]
                            }
                          ]
                      }
                  ]
    }
};
