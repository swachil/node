// Money Transfer module

function upi(username, amount) {
    console.log(`Amount ${amount} transferred to user ${username} by upi.`);
    footer();
}

function neft(username, amount) {
    console.log(`Amount ${amount} transferred to user ${username} by neft.`);
    footer();
}

function rtgs(username, amount) {
    console.log(`Amount ${amount} transferred to user ${username} by rtgs.`);
    footer();
}

function footer() {
    console.log('Money transfer completed.');
}

module.exports = {
    upi,
    neft,
    rtgs
};