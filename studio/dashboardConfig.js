export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb329330316f9027296d1f5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ttpho2tx',
                  apiId: '3ed0bb03-452c-478e-b13f-962dfc649a37'
                },
                {
                  buildHookId: '5eb32933e929640175599621',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wmcubfjg',
                  apiId: 'e34a8709-290c-40cc-a800-2a30d1464dc9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stevenwaller/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wmcubfjg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
