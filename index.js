// Code your solution in this file!
function distanceFromHqInBlocks(val)
{
    return Math.abs(val-42);
}

function distanceFromHqInFeet(val)
{
    return (distanceFromHqInBlocks(val)*264);
}

function distanceTravelledInFeet(start, end)
{
    return (Math.abs(start-end)*264);
}

function calculatesFarePrice(start, destination)
{
    const distance=distanceTravelledInFeet(start, destination);
    console.log(distance);
    if (distance<400)
    {
        return 0;
    }
    else if ((400<=distance) && (distance<=2000))
    {
        return ((distance-400)*0.02);
    }
    else if ((2000<=distance) && (distance<=2500)) 
    {
        return 25;
    }
    else 
    {
        return 'cannot travel that far';
    }
}