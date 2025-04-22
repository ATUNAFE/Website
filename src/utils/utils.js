export const formatInstruments = (instruments) =>
    instruments.split(",").map(instrument =>
        instrument.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase());

export const formatMembers = (members) =>
    members.map((member) => ({
        name: member.frontmatter.name,
        nameC: member.frontmatter.nameC,
        course: member.frontmatter.course,
        godmother: member.frontmatter.godmother,
        picture: member.frontmatter.picture,
        instruments: formatInstruments(member.frontmatter.instruments),
        
    })
);