export default {
  widgets: [
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
                  buildHookId: '5eb793dd8f7aa33705db9748',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6v8dqtw4',
                  apiId: '6086ad1a-6fcd-45c7-8cce-ba1a3c2df52e'
                },
                {
                  buildHookId: '5eb793dd89c051d8bd347327',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-g8254e1g',
                  apiId: '8484540d-d91b-424b-8192-5d32699cdc42'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zaguerinho/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-g8254e1g.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
