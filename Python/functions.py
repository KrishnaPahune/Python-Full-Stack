def generate_student_report(name, scores):                                          #parameters
    """
    Generates a student report.
    Returns total, average, grade, and status.
    """
    if not scores:
        return 0, 0, 'N/A', 'No scores available'
    
    total = sum(scores)
    avg = total / len(scores)

    if avg >= 90:
        grade = 'A'
    elif avg >= 80:
        grade = 'B'
    elif avg >= 70:
        grade = 'C'
    elif avg >= 60:
        grade = 'D'
    else:        
        grade = 'F'
    
    result = 'Pass' if grade != 'F' else 'Fail'
    return total, avg, grade, result                                               #multiple return values
    


total, avg, grade, result = generate_student_report("Krishna",[85, 90, 78, 92, 88]) #Arguements
print(f"Total: {total}, Average: {avg}, Grade: {grade}, Result: {result}")