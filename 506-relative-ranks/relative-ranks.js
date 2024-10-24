/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let mp = new Map();

    for (let i = 0; i < score.length; i++) {
        mp.set(score[i], i);
    }

    let sortScore = [...mp.entries()].sort((a, b) => b[0] - a[0]);

    let answer = new Array(score.length);

    for (let i = 0; i < sortScore.length; i++) {
        let index = sortScore[i][1];
        if (i === 0) {
            answer[index] = "Gold Medal"
        }else if (i === 1) {
            answer[index] = "Silver Medal"
        }else if (i === 2) {
            answer[index] = "Bronze Medal"
        }else {
            answer[index] = (i + 1).toString();
        }
    }

    return answer;
};