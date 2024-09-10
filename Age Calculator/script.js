function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    
    if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2024) {
        document.getElementById("result").innerText = "Please enter a valid date of birth.";
        return;
    }


    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    if (birthDate.getDate() !== day || birthDate.getMonth() !== month - 1 || birthDate.getFullYear() !== year) {
        document.getElementById("result").innerText = "Invalid date entered. Please check the date.";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += prevMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
}