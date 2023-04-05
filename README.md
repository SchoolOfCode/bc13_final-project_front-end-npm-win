<b><h1 style="font-style: bold; font-size: 40px;">Circles</h1></b>

Welcome to the Circles app, designed to help users find their circles. For the best performance access the circles web application via a Desktop or Laptop. Access the website here: https://circlesapp.netlify.app/.


<br/><h1 style="font-style: bold; font-size: 25px;">The Problem</h1>

Watch our promo video here: https://www.youtube.com/watch?v=mioXPCu1JEo

Social isolation is becoming more prevalent in today's society and can be caused by a number of reasons.  Poverty, grief, illness or disability to name a few. For these reasons, individuals can struggle to integrate into their local communities. This is where social prescribing steps in. Social prescribing, also known as community referral, allows health professionals to refer individuals to link workers who will then connect them to support in their community. 

**So how can we help link workers, help to combat social isolation and foster wellbeing via shared interests?**

<br/><h1 style="font-style: bold; font-size: 25px;">The Solution</h1>

Our solution was to design a web-based, centralised platform that allows users to quickly access reliable information on their local communities and to facilitate integration into those social circles, allowing them to easily join and keep track of their local events. The Ideation of this application has been designed and heavily influenced by our research and communication with the Social Prescribing Team at Citzens Advice. 


## Screenshots 

![Screenshot](/circles/public/images/homescreenshot.png)
![Screenshot](/circles/public/images/helpscreenshoot.png)
![Screenshot](/circles/public/images/signinscreenshot.png)
![Screenshot](/circles/public/images/groupsscreenshot.png)
![Screenshot](/circles/public/images/accountscreenshot.png)
![Screenshot](/circles/public/images/conactscreenshot.png)
![Screenshot](/circles/public/images/faqscreenshot.png)




## Tech Stack

- **Languages:** Javascript, CSS3, PostgreSQL

- **Frameworks:** Next.js, React.js, TailwindCSS

- **Libraries:** Daisy UI, Mamba UI, Swiper, Framer motion, Fuse.js

- **Server:** Next.js, Prisma

- **Authentication:** Next/Auth

- **Testing:** Cypress, React Testing Library, Jest

- **Deployment:** Netlify 


## How to run Locally

First, clone the repo,

```bash
  cd circles
```

**Install dependencies** 

setting it up, run:

```bash
  npm install or npm i
```

Start the server

```bash
npm run dev
```




Open [http://localhost:3000](http://localhost:3000) with your browser to see the homepage.</br>


## Documentation

- [Figma](https://www.figma.com/file/5LxoxkXd8TX23JeYynXC8W/Untitled?node-id=0%3A1&t=k7QRcaKyMFDbISQr-0)
- [Miro](https://miro.com/app/board/uXjVP12KJHY=/)
- [Excalidraw](https://excalidraw.com/#room=53e6ab962b6b000fab16,J32pqtFo4XtF4sVgZ0v4uw)
- [Trello](https://trello.com/b/sEcoz1SA/silver-surfers)
- Google spreadsheets
- Google Presentation 

### Improvements & Stretch goals

- Scroll bar on the account page needs to disappear when there are no events 
- Develop the account platform for the Link workers. Features would include a component that allows Link workers to track their assigned clients.
- Fully responsive on mobile and tablets. MVP achieved as a web app.
- Schedule and carry out more real-world testing and empathy maps with the target audience. Collate feedback and integrate this into a new sprint.
- Group administrators have accounts to set up new groups on the platform. Requests to join groups could be made directly through the app
- Further integration of Next Auth with more tables added to the db for authorisation of different accounts.
- Delve further into accessibility and aim to achieve 100 on Lighthouse reports. Increase the ARIA coverage on the app.
- Build a more comprehensive testing suite which could be integrated into Github tools.





### Challenges
- Database connections- Limited to 5 on our free plan. This made running the servers during development a balancing act when we sometimes required more connections.
- Deployment & merging: We had a good merging policy in place but occasionally road blocks appeared along the way. Eg: package-lock errors and empty components
- CSS consistency across the site
- Responsiveness across the site 
- Date-Time formatting: Matching the dates produced by the date picker to the storage format in the db. 








## Authors:

- [Camila Brizzi](https://github.com/sea-breezy)

- [Danny Bains](https://github.com/DannyBains2)

- Gabriel Brocklesby

- [Iona Meadows](https://github.com/ionajosephine)

- [Isabelle Francis](https://github.com/B2ella)

- [Matt Doherty](https://github.com/matt190589/matt190589)



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
