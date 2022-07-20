// дозволяє краще структурувати код якщо є однотипні елементи
enum Membership {
	Simple, // 0 за умовчанням
	Standard, // 1
	Premium // 2
}

const membership = Membership.Standard
const membershipReverse = Membership[2]
console.log(membership) // 1
console.log(membershipReverse) // Premium

// внятні значення для єнумів
enum SocialMedia {
	VK = 'VK',
	FACEBOOK = 'FACEBOOK',
	INSTAGRAM = 'INSTAGRAM'
}
const social = SocialMedia.INSTAGRAM
console.log(social)