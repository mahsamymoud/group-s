import { useState } from "react";

const timeGroups = [
  "السبت ٨:٠٠",
  "السبت ٩:٣٠",
  "السبت ١١:٠٠",
  "السبت ١٢:٣٠",
  "السبت ٢:٠٠",
  "الأحد ٨:٠٠",
  "الأحد ٩:٣٠",
  "الأحد ١١:٠٠",
  "الأحد ١٢:٣٠",
  "الأحد ٢:٠٠"
];

const matches = [];

export default function GroupSwapApp() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [currentGroup, setCurrentGroup] = useState("");
  const [desiredGroup, setDesiredGroup] = useState("");
  const [match, setMatch] = useState(null);

  const handleSubmit = () => {
    const found = matches.find(
      (entry) =>
        entry.currentGroup === desiredGroup &&
        entry.desiredGroup === currentGroup
    );

    if (found) {
      setMatch(found);
    } else {
      matches.push({ name, phone, currentGroup, desiredGroup });
      setMatch(null);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', direction: 'rtl', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>تبادل المجموعات</h2>
      <input placeholder="الاسم" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '10px', margin: '5px 0' }} />
      <input placeholder="رقم الهاتف" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: '100%', padding: '10px', margin: '5px 0' }} />
      <select value={currentGroup} onChange={(e) => setCurrentGroup(e.target.value)} style={{ width: '100%', padding: '10px', margin: '5px 0' }}>
        <option value="">اختر مجموعتك الحالية</option>
        {timeGroups.map((g) => <option key={g} value={g}>{g}</option>)}
      </select>
      <select value={desiredGroup} onChange={(e) => setDesiredGroup(e.target.value)} style={{ width: '100%', padding: '10px', margin: '5px 0' }}>
        <option value="">اختر المجموعة التي تريدها</option>
        {timeGroups.map((g) => <option key={g} value={g}>{g}</option>)}
      </select>
      <button onClick={handleSubmit} style={{ width: '100%', padding: '10px', margin: '10px 0', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>ابحث عن تطابق</button>
      {match ? (
        <div style={{ color: 'green', textAlign: 'center', fontWeight: 'bold' }}>
          ✅ تطابق مع: {match.name} - {match.phone}
        </div>
      ) : (
        <div style={{ textAlign: 'center', color: '#777' }}>
          {!name || !phone || !currentGroup || !desiredGroup
            ? "املأ جميع الحقول أولاً"
            : "لم يتم العثور على تطابق بعد. سيتم حفظ طلبك تلقائيًا."}
        </div>
      )}
    </div>
  );
      }
