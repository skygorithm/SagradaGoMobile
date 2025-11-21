export const sacramentRequirements = {
  Wedding: [
    { id: 'marriage_license', label: 'Valid marriage license', requiresUpload: true },
    { id: 'baptismal_certificate', label: 'Baptismal certificate', requiresUpload: true },
    { id: 'confirmation_certificate', label: 'Confirmation certificate', requiresUpload: true },
    { id: 'pre_marriage_seminar', label: 'Pre-marriage seminar certificate', requiresUpload: true },
    { id: 'parental_consent', label: 'Parental consent (if applicable)', requiresUpload: true },
  ],
  Baptism: [
    { id: 'birth_certificate', label: 'Birth certificate', requiresUpload: true },
    { id: 'parents_marriage_certificate', label: "Parent's marriage certificate", requiresUpload: true },
    { id: 'godparent_confirmation', label: "Godparent's confirmation certificate", requiresUpload: true },
    { id: 'baptismal_seminar', label: 'Baptismal seminar attendance', requiresUpload: true },
  ],
  Confession: [
    { id: 'no_special_requirements', label: 'No special requirements', requiresUpload: false },
    { id: 'contrite_heart', label: 'Come with a contrite heart', requiresUpload: false },
    { id: 'examination_conscience', label: 'Examination of conscience', requiresUpload: false },
  ],
  'Anointing of the Sick': [
    { id: 'medical_certificate', label: 'Medical certificate (if applicable)', requiresUpload: true },
    { id: 'family_present', label: 'Family member or guardian present', requiresUpload: false },
    { id: 'contact_parish', label: 'Contact parish office for scheduling', requiresUpload: false },
  ],
  'First Communion': [
    { id: 'baptismal_certificate', label: 'Baptismal certificate', requiresUpload: true },
    { id: 'communion_preparation', label: 'First Communion preparation completion', requiresUpload: true },
    { id: 'parent_consent', label: 'Parent/guardian consent', requiresUpload: true },
    { id: 'catechism_attendance', label: 'Regular attendance at catechism classes', requiresUpload: false },
  ],
  Burial: [
    { id: 'death_certificate', label: 'Death certificate', requiresUpload: true },
    { id: 'deceased_baptismal', label: 'Baptismal certificate of deceased', requiresUpload: true },
    { id: 'family_contact', label: 'Family contact information', requiresUpload: false },
    { id: 'preferred_schedule', label: 'Preferred date and time', requiresUpload: false },
  ],
  Confirmation: [
    { id: 'baptismal_certificate', label: 'Baptismal certificate', requiresUpload: true },
    { id: 'first_communion_certificate', label: 'First Communion certificate', requiresUpload: true },
    { id: 'confirmation_preparation', label: 'Confirmation preparation completion', requiresUpload: true },
    { id: 'sponsor_certificate', label: "Sponsor's confirmation certificate", requiresUpload: true },
    { id: 'catechism_attendance', label: 'Regular attendance at catechism classes', requiresUpload: false },
  ],
};

