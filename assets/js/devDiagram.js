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
          HTMLclass: 'light-green',
          children: [
                      {
                          text:{
                              name: 'Frontend'

                          },
                          HTMLclass: 'light-green',
                          link: {
                              href: 'http://www.google.com'
                          },
                          children:[
                            {
                                text:{
                                  name:'HTML/CSS'
                                },
                                HTMLclass:'light-green'
                            },
                            {
                              text:{
                                name:'JavaScript'
                              },
                              HTMLclass:'light-green',
                              children:[
                                {
                                  text:{
                                    name:'JQuery'
                                  },
                                  HTMLclass:'light-green'
                                },
                                {
                                  text:{
                                    name:'Angular ~7/Angular.JS'
                                  },
                                  HTMLclass:'light-green',
                                  stackChildren:true,
                                  children:[
                                    {
                                      text:{
                                        name:'jslint'
                                      },
                                      HTMLclass:'light-green'
                                    },
                                    {
                                      text:{
                                        name:'karma'
                                      },
                                      HTMLclass:'light-green'
                                    },
                                    {
                                      text:{
                                        name:'grunt'
                                      },
                                      HTMLclass:'light-green'
                                    },
                                    {
                                      text:{
                                        name:'express'
                                      },
                                      HTMLclass:'light-green'
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
                          HTMLclass: 'light-green',
                          children: [
                            {
                                text:{
                                    name: 'Java J2EE'
                                },
                                HTMLclass: 'light-green',
                                stackChildren:true,
                                children: [
                                  {
                                      text:{
                                          name: 'Struts'
                                      },
                                      HTMLclass: 'light-green'
                                  },
                                  {
                                      text:{
                                          name: 'Spring'
                                      },
                                      HTMLclass: 'light-green',
                                      stackChildren:true,
                                      children:[
                                        {
                                            text:{
                                                name: 'Spring MVC'
                                            },
                                            HTMLclass: 'light-green'
                                        },
                                        {
                                            text:{
                                                name: 'Spring Security'
                                            },
                                            HTMLclass: 'light-green'
                                        }
                                      ]
                                  },
                                  {
                                      text:{
                                          name: 'Hibernate'
                                      },
                                      HTMLclass: 'light-green'
                                  },
                                ]
                            }
                          ]
                      }
                  ]
    }
};
