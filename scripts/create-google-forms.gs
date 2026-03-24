/**
 * FASTBAT Google Forms Creator
 *
 * Instructions:
 * 1. Go to https://script.google.com
 * 2. Click "New project"
 * 3. Delete the default code and paste this entire script
 * 4. Click "Run" (play button) — it will ask for permissions, click "Allow"
 * 5. Check the Execution Log at the bottom for your form URLs
 * 6. Forms will also appear in your Google Drive
 */

function createFastbatForms() {
  const forms = {};

  // ── Form 1: Membership ──
  const membership = FormApp.create('FASTBAT Membership Form');
  membership.setDescription(
    'Join FASTBAT — Friends and Supporters of Trinity Baseball. ' +
    'Your membership supports travel, equipment, scholarships, and team events.'
  );
  membership.addTextItem().setTitle('Full Name').setRequired(true);
  membership.addTextItem().setTitle('Email Address').setRequired(true);
  membership.addTextItem().setTitle('Phone Number');
  membership.addTextItem().setTitle('Player Name & Graduation Year')
    .setHelpText('If applicable — leave blank if not a current player parent');
  membership.addListItem().setTitle('Membership Level').setChoiceValues([
    'Tiger Fan ($50)',
    'Dugout Supporter ($150)',
    'Season Sponsor ($500+)'
  ]).setRequired(true);
  membership.addParagraphTextItem().setTitle('Additional Comments');
  membership.setConfirmationMessage(
    'Thank you for joining FASTBAT! We\'ll be in touch soon. Go Tigers!'
  );
  forms.membership = membership.getPublishedUrl();

  // ── Form 2: Volunteer Sign-Up ──
  const volunteer = FormApp.create('FASTBAT Volunteer Sign-Up');
  volunteer.setDescription(
    'Interested in volunteering with FASTBAT? Let us know how you\'d like to help — ' +
    'every bit of support makes a difference for Trinity Baseball.'
  );
  volunteer.addTextItem().setTitle('Full Name').setRequired(true);
  volunteer.addTextItem().setTitle('Email Address').setRequired(true);
  volunteer.addTextItem().setTitle('Phone Number');
  volunteer.addCheckboxItem().setTitle('Areas of Interest').setChoiceValues([
    'Game Day Operations',
    'Events & Hospitality',
    'Fundraising',
    'Communications & Social Media',
    'Other'
  ]).setRequired(true);
  volunteer.addParagraphTextItem().setTitle('Availability & Notes')
    .setHelpText('Any details about your schedule or other ways you\'d like to help');
  volunteer.setConfirmationMessage(
    'Thank you for volunteering! A FASTBAT board member will follow up with you shortly.'
  );
  forms.volunteer = volunteer.getPublishedUrl();

  // ── Form 3: Sponsorship Interest ──
  const sponsorship = FormApp.create('FASTBAT Sponsorship Interest');
  sponsorship.setDescription(
    'Interested in sponsoring Trinity Baseball through FASTBAT? ' +
    'Fill out this form and a board member will be in touch to discuss partnership opportunities.'
  );
  sponsorship.addTextItem().setTitle('Business / Sponsor Name').setRequired(true);
  sponsorship.addTextItem().setTitle('Contact Name').setRequired(true);
  sponsorship.addTextItem().setTitle('Email Address').setRequired(true);
  sponsorship.addTextItem().setTitle('Phone Number');
  sponsorship.addListItem().setTitle('Sponsorship Level Interest').setChoiceValues([
    'Bronze — $250',
    'Silver — $500',
    'Gold — $1,000',
    'Platinum — $2,500+',
    'Not sure yet — tell me more'
  ]).setRequired(true);
  sponsorship.addParagraphTextItem().setTitle('Message or Questions');
  sponsorship.setConfirmationMessage(
    'Thank you for your interest in sponsoring FASTBAT! We\'ll be in touch soon.'
  );
  forms.sponsorship = sponsorship.getPublishedUrl();

  // ── Form 4: Alumni Interest ──
  const alumni = FormApp.create('FASTBAT Alumni Interest');
  alumni.setDescription(
    'Once a Tiger, always a Tiger. Whether you want to donate, mentor a current player, ' +
    'speak at a team event, or simply reconnect — we\'d love to hear from you.'
  );
  alumni.addTextItem().setTitle('Your Name').setRequired(true);
  alumni.addTextItem().setTitle('Email Address').setRequired(true);
  alumni.addTextItem().setTitle('Years Played at Trinity')
    .setHelpText('e.g., 2015–2019');
  alumni.addParagraphTextItem().setTitle('How Would You Like to Help?')
    .setHelpText(
      'Donate, mentor a player, speak at a team event, host a dinner, attend alumni events, etc.'
    ).setRequired(true);
  alumni.setConfirmationMessage(
    'Thank you! A FASTBAT board member will reach out to you soon. Go Tigers!'
  );
  forms.alumni = alumni.getPublishedUrl();

  // ── Log all URLs ──
  Logger.log('');
  Logger.log('=============================================');
  Logger.log('   FASTBAT GOOGLE FORMS — CREATED!');
  Logger.log('=============================================');
  Logger.log('');
  Logger.log('Membership Form:');
  Logger.log(forms.membership);
  Logger.log('');
  Logger.log('Volunteer Sign-Up Form:');
  Logger.log(forms.volunteer);
  Logger.log('');
  Logger.log('Sponsorship Interest Form:');
  Logger.log(forms.sponsorship);
  Logger.log('');
  Logger.log('Alumni Interest Form:');
  Logger.log(forms.alumni);
  Logger.log('');
  Logger.log('=============================================');
  Logger.log('Copy these URLs and share them with Claude');
  Logger.log('to wire them into the FASTBAT website.');
  Logger.log('=============================================');
}
