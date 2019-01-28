function dft(x){
  N = x.length ;
  const X = [];

  for (let k=0; k<N; k++){
    let re = 0;
    let im = 0;
    for (n=0; n<N; n++){
      const phi = TWO_PI*k*n/N ;
      re[k] += x[k]*sin(phi) ;
      im[k] -= x[k]*cos(phi) ;
    }
    re = re/N;
    im = im/N;

    let freq = k;
    let amp = sqrt(re*re + im*im);
    let phase = atan2(im, re);
    X[k] = {re, im, freq, amp, phase}
  }
  return X;
}
