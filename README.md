# NETFLIX CLONE

This is a full-stack project based on React.

******

### Participants: 
- [Chi](https://github.com/KhanhChiTran)
- [Julia](https://github.com/juliasckr)
- [Magda](https://github.com/magdasokolovic)
- [Nathaly](https://github.com/nathcolombo)

![cinema](https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80)

******

## SPLITTING TASKS:
1. Chi: creating Back-end server, **Loading**, **Layout** components
2. Julia: **Navbar**, **Footer**, **Search**, **Tvshow** components, choosing font/colors/logo
3. Nathaly: **Banner** component
4. Magda: **Row**, **Player** components

We used [GitHub Projects](https://github.com/magdasokolovic/netflix-clone/projects) for organizing our tasks. All tasks were divided into "To do", "In progress" and "Done" sections

****** 

## DEV NOTES:

- [move all branches to master](https://stackoverflow.com/questions/2862590/how-to-replace-master-branch-in-git-entirely-from-another-branch)
- an issue to merge properly different branches. Solution: let one person do the merging.
- while using other libraries such as [React Elastic Carousel](https://sag1v.github.io/react-elastic-carousel/#styling) for **Carousel** component it is important to understand that the library has its own CSS styling which can be overriden, when needed. Almost every element in react-elastic-carousel has a  CSS class with the "rec-" prefix.
- to organize styling it is a good idea to import all partial Sass files into main.scss file which is just imported once (into the main App.js file)
- in order to fetch multiple data inside useEffect hook it is a better to fetch with _async/await_ (otherwise the data might not be fetched properly).

******

## DEPENDENCIES USED FOR THE PROJECT:
- [axios](https://www.npmjs.com/package/axios) for data fetching
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) for routing
- [react-player](https://www.npmjs.com/package/react-player) for playing a youtube video
- [react-elastic-carousel](https://sag1v.github.io/react-elastic-carousel/) for a carousel component
- [sass](https://sass-lang.com/) for styling
