export const ComplaintArr = [
  {
    title: "Service client",
    boxes: [
      {
        type: "onclick",
        action: "addStep",
        title: "Contactez nous",
        subtitle: "Par email ou par téléphone"
      },
      {
        type: "link",
        action: "/faq",
        title: "Foire aux questions",
        subtitle: "La réponse à votre question se retrouve peut-être ici"
      },
      {
        type: "external",
        action: "https://www.reddit.com/r/flatearth/",
        title: "Forum de discussion",
        subtitle: "D'autres personnes ont peut-être eu le même problème que vous"
      }
    ]
  },
  {
    title: "Avez-vous essayé de répondre à vos questions par ces options ?",
    boxes: [
      {
        type: "link",
        action: "/faq",
        title: "Foire aux questions",
        subtitle: "La réponse à votre question se retrouve peut-être ici"
      },
      {
        type: "external",
        action: "https://www.reddit.com/r/flatearth/",
        title: "Forum de discussion",
        subtitle: "D'autres personnes ont peut-être eu le même problème que vous"
      }
    ]
  },
  {
    title: "Contactez-nous",
    boxes: [
      {
        type: "link",
        action: "/buy-a-ticket",
        title: "Par courriel",
        subtitle: "Écrivez-nous et quelqu'un va vous répondre dans les plus bref délais"
        
      },
      {
        type: "onclick",
        action: "phone",
        title: "Par téléphone",
        subtitle: "Parlez à un de nos agent qui saura bous aider"
      }
    ]
  }
];