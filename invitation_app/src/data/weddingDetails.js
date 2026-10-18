/**
 * All couple, date, and venue details live here so copy can be updated in one place.
 * Countdown target is midnight on the wedding day in Asia/Kolkata (IST, UTC+5:30).
 */
export const TIME_ZONE = 'Asia/Kolkata'

export const weddingDetails = {
  fatherName: 'Ramesh Narakatla',
  motherName: 'Radha Narakatla',
  brotherName: 'Harshavardhan Narakatla',
  groomsName: 'Vamsi Krishna Narakatla',
  bridesName: 'Priya Athinarapu',
  blessing: '|| Shree Ganeshaya Namah ||',
  familyLine: 'Together with the blessings of our families',
  requestLine: 'REQUEST THE PLEASURE OF YOUR PRESENCE',
  celebrateLine: 'AS WE CELEBRATE OUR WEDDING',
  coupleTagline: 'Two hearts, one beautiful journey, and a lifetime of togetherness.',
  weddingDateDisplay: '25th November 2026',
  /**
   * Wedding day start in India Standard Time.
   * ISO offset +05:30 corresponds to Asia/Kolkata.
   */
  weddingDateIso: '2026-11-25T00:00:00+05:30',
  events: [
    {
      id: 'engagement',
      title: 'The Engagement',
      date: '28th October 2026',
      time: 'Starts at 7:00 PM',
      description: 'A beautiful beginning to our forever.',
      buttonLabel: 'View Engagement Venue',
      venueUrl: 'https://maps.app.goo.gl/o2rzELPN9T4Gx4cG7',
      featured: false,
    },
    {
      id: 'wedding',
      title: 'The Wedding',
      date: '25th November 2026',
      time: 'Starts at 9:00 AM',
      description: 'Join us as we begin our journey of love and togetherness.',
      buttonLabel: 'View Wedding Venue',
      venueUrl: 'https://maps.app.goo.gl/6BbC9E8V4DmJb7pF7?g_st=aw',
      featured: true,
    },
    {
      id: 'reception',
      title: 'The Reception',
      date: '29th November 2026',
      time: 'Starts at 7:00 PM',
      description: 'Celebrate this beautiful new chapter with us.',
      buttonLabel: 'View Reception Venue',
      venueUrl: 'https://maps.app.goo.gl/qQTnCaXkL7atBr4Y7',
      featured: false,
    },
  ],
}
