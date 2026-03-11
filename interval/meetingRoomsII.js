const meetingRoomCount = (intervals) => {
    const starts = intervals.map((a) => a[0]);
    const ends = intervals.map((a) => a[1]);

    starts.sort();
    ends.sort();

    let maxRooms = 0;
    let left = 0;
    let currentRooms = 0;

    for (let right = 0; right < starts.length; right++) {
        if (starts[left] > ends[right]) {
            currentRooms--;
            left++;
        } else {
            currentRooms++;
            maxRooms = Math.max(maxRooms, currentRooms);
        }
    }

    return minimumRoom;
}