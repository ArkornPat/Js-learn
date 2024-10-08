const scores = [
    {
      firstname: "Bob",
      lastname: "Smith",
      classNumber: 2,
      subject: { math: 75, art: 67, science: 72, english: 85 },
    },
    {
      firstname: "Isabel",
      lastname: "Moore",
      classNumber: 3,
      subject: { math: 86, art: 70, science: 78, english: 90 },
    },
    {
      firstname: "Alice",
      lastname: "Clark",
      classNumber: 1,
      subject: { math: 92, art: 88, science: 84, english: 75 },
    },
    {
      firstname: "Charlie",
      lastname: "Johnson",
      classNumber: 3,
      subject: { math: 80, art: 90, science: 88, english: 79 },
    },
    {
      firstname: "David",
      lastname: "Lee",
      classNumber: 1,
      subject: { math: 95, art: 75, science: 82, english: 91 },
    },
    {
      firstname: "Eva",
      lastname: "Davis",
      classNumber: 2,
      subject: { math: 68, art: 80, science: 77, english: 65 },
    },
    {
      firstname: "Frank",
      lastname: "Brown",
      classNumber: 3,
      subject: { math: 70, art: 85, science: 81, english: 73 },
    },
    {
      firstname: "Grace",
      lastname: "Miller",
      classNumber: 1,
      subject: { math: 98, art: 95, science: 89, english: 88 },
    },
    {
      firstname: "Henry",
      lastname: "Wilson",
      classNumber: 2,
      subject: { math: 85, art: 70, science: 74, english: 82 },
    },
    {
      firstname: "Jack",
      lastname: "Taylor",
      classNumber: 1,
      subject: { math: 82, art: 87, science: 90, english: 80 },
    },
  ];

// แสดงคะแนนวิชาศิลปะของ Bob Smith บนหน้าจอ
// แสดงคะแนนวิชาคณิตศาสตร์ของ Isabel Moore บนหน้าจอในรูปแบบ "Isabel Moore got <คะแนนคณิตศาสตร์> scores on math." โดยใช้ String Template Literal
// เปลี่ยนคะแนนวิชาภาษาอังกฤษของ Bob Smith จาก 85 เป็น 90
// เพิ่ม key age เข้าไปในข้อมูลของ Alice Clark และกำหนดค่าให้เท่ากับ 15 จากนั้นแสดงข้อมูลของ Alice Clark บนหน้าจอ
// แสดงคะแนนวิชาคณิตศาสตร์และวิชาศิลปะของ Devid Lee บนหน้าจอในรูปแบบ "Devid Lee got <คะแนนคณิตศาสตร์> scores on math and <คะแนนศิลปะ> scores on art." โดยใช้ String Template Literal
console.log(scores[0].subject.art)
console.log(`Isabel Moore got ${scores[1].subject.math} scores on math.`)
scores[0].subject.english = 90
console.log(scores[0])
scores[2].age = 15
console.log(scores[2])
console.log(`Devid Lee got ${scores[4].subject.math} scores on math and ${scores[4].subject.art} scores on art.`)

