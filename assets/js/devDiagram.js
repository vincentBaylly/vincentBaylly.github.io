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
          HTMLclass: 'blue',
          children: [
                      {
                          text:{
                              name: 'Frontend'

                          },
                          HTMLclass: 'blue',
                          link: {
                              href: 'http://www.google.com'
                          },
                          children:[
                            {
                                text:{
                                  name:'HTML/CSS'
                                },
                                HTMLclass:'blue'
                            },
                            {
                              text:{
                                name:'JavaScript'
                              },
                              HTMLclass:'blue',
                              children:[
                                {
                                  text:{
                                    name:'JQuery'
                                  },
                                  HTMLclass:'blue'
                                },
                                {
                                  text:{
                                    name:'Angular ~7/Angular.JS'
                                  },
                                  HTMLclass:'blue',
                                  stackChildren:true,
                                  children:[
                                    {
                                      text:{
                                        name:'jslint'
                                      },
                                      HTMLclass:'blue'
                                    },
                                    {
                                      text:{
                                        name:'karma'
                                      },
                                      HTMLclass:'blue'
                                    },
                                    {
                                      text:{
                                        name:'grunt'
                                      },
                                      HTMLclass:'blue'
                                    },
                                    {
                                      text:{
                                        name:'express'
                                      },
                                      HTMLclass:'blue'
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
                          HTMLclass: 'blue',
                          children: [
                            {
                                text:{
                                    name: 'Java J2EE'
                                },
                                HTMLclass: 'blue',
                                stackChildren:true,
                                children: [
                                  {
                                      text:{
                                          name: 'Struts'
                                      },
                                      HTMLclass: 'blue'
                                  },
                                  {
                                      text:{
                                          name: 'Spring'
                                      },
                                      HTMLclass: 'blue',
                                      stackChildren:true,
                                      children:[
                                        {
                                            text:{
                                                name: 'Spring MVC'
                                            },
                                            HTMLclass: 'blue'
                                        },
                                        {
                                            text:{
                                                name: 'Spring Security'
                                            },
                                            HTMLclass: 'blue'
                                        }
                                      ]
                                  },
                                  {
                                      text:{
                                          name: 'Hibernate'
                                      },
                                      HTMLclass: 'blue'
                                  },
                                ]
                            }
                          ]
                      }
                  ]
    }
};
