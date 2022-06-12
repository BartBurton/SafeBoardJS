import Developer from 'src/types/Developer'
import Group from 'src/types/Group'
import { rand, selectRandomWithRepeat } from './rand'

export default () => {
    const names = 'Aaron, Adam, Aden, Aidan, Isaac, Alan, Alex, Alexis, Albert, Andrea, Archer, Buddy, Barney, Beverly, Ben, Benjamin, Bill, Blaise, Blake, Bob, Bobby, Brian, Brandon, Brooke, Brandon, Bruce, Violet, Vivian, William, Vincent, Harold, Harry, Henry, Howard, Grayson, Greg, Gregory, Gavin, Gary, David, Diane, Daniel, Darcy, Dustin, Justin, Jaden, Jacob, James, Jason, Jack, Jackson, Jeremy, Jerry, Jody, Jose, episode, Joyce, John, Jonathan, Jordan, George, Josh, Joshua, Diego, Dylan, Dillon, Dominic, Donald, Douglas, Duncan, David, Damon, Dastany, Zane, Zuri, Zachery, Jacob, Ian, Eli, Irvine, Easton, Ethan, Iten, Caleb, Karen, Casper, Quentin, Quinn, Kevin, Calvin, Ken, Kimberly, King, Clark, Cody, Connor, Cole, Christian, Christopher, Xavier, Cameron, Lionel, Larry, Leo, Leon, Liam, Lloyd, Logan, Lawrence, Louis, Lucas, Luke, Michael, Max, Maxwell, Marvin, Mark, Marlon, Megan, Mason, Melanie, Melvin, Mickey, Moses, Morgan, Madeline, Mason, Matthew, Nathan, Nicholas, Noah, Noah, Nolan, Norwood, Albee, Oliver, Oscar, Austin, Owen, Patrick, Paul, Perry, Pierce, Peter, Paul, Ryan, Riley, Ryan, Russell, Raphael, Ray, Reynold, Ryan, Rick, Richard, Robert, Robin, Roger, Ronald, Rudy, Ray, Raylan, Raymond, Simon, Sameer, Sebastian, Seth, Skylar, Scott, Spencer, Stephen, Stanley, Stanford, Sam, Samuel, Theodore, Tim, Timothy, Todd, Tom, Thomas, Tony, Tristan, Tumas, Wyatt, Wilson, William, Winslow, Wallis, Walter, Felix, Phil, Philip, Floyd, Ford, Foster, Franklin, Francisco, Fred, Fraser, Frank, Hudson, Hunter, Harvey, Hardin, Harris, Harrison, Hugh, Hugo, Charlie, Charles, Cherry, Sheldon, Sherwood, Sean, Edward, Edgar, Adrian, Aiden, Alvin, Elias, Angell, Andrew, Anthony, Eric, Earl, Ethan, Ashley, Ashton'
        .split(', ')
    const imgs = '128512,128513,128514,128515,128516,128517,128518,128519,128520,128521,128522,128523,128524,128525,128526,128527,128528,128529,128530,128531,128532,128533,128534,128535,128536,128537,128538,128539,128540,128541,128542,128543,128544,128545,128546,128547,128548,128549,128550,128551,128552,128553,128554,128555,128556,128557,128558,128559,128560,128561,128562,128563,128564,128565,128566,128567,128568,128569,128570,128571,128572,128573,128574,128576,128577,128578,128579,128580'
        .split(',')
    const groups = [
        { name: 'Management', color: '#ff4500' },
        { name: 'Design', color: '#3ffffd' },
        { name: 'Art', color: '#26a641' },
        { name: 'Animation', color: '#5c67e1' },
        { name: 'Programming', color: '#fe4d96' },
        { name: 'Sound', color: '#fff688' },
        { name: 'QA', color: '#009fcf' },
        { name: 'Production', color: '#fd3434' },
        { name: 'IT', color: '#ff06b7' },
        { name: 'Marketing', color: '#f8b400' },
        { name: 'Research', color: '#24a19c' },
        // { name: 'Other', color: '#b5b6b8' },
    ]

    const generatedGroups: (Group | undefined)[] = groups.map(({ name, color }, i): Group => ({
        id: i + 1,
        name,
        color,
    }))
    console.log(generatedGroups)

    const result: Developer[][] = []
    let id = 1
    generatedGroups.push(undefined)
    generatedGroups.forEach(g => {
        const count = rand(25, 45)
        const nameItems = selectRandomWithRepeat(names, count)
        const imgItems = selectRandomWithRepeat(imgs, count)

        const items = nameItems.map((e, i): Developer => ({
            id: i + id,
            name: e,
            img: `&#${imgItems[i]};`,
            experience: rand(10, 99) / 10,
            group: g,
        }))

        id += count
        result.push(items)
    })

    console.log(result.flat())
}


