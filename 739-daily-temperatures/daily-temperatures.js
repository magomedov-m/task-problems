/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // задача не решена самостоятельно, подсказка: использовать монотонные стек. решить эту задачу 29.05
     const n = temperatures.length;
    const ans = new Array(n).fill(0);
    const st = [];

    for (let i = n - 1; i >= 0; i--) {
        while (st.length && temperatures[i] >= temperatures[st[st.length - 1]]) {
            st.pop();
        }
        ans[i] = st.length ? st[st.length - 1] - i : 0;
        st.push(i);
    }
    
    return ans;
};