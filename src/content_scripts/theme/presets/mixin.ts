function radialGradient(outer: string, inner: string, type: string = 'circle') {
  return `
  background: ${outer};
  background: -webkit-radial-gradient( center, ${type} cover,  ${inner} 0%, ${outer} 100% );
	background: radial-gradient( center, ${type} cover,  ${inner} 0%, ${outer} 100% );
  `;
}

export { radialGradient };
