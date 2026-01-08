
export function BlueTriangleSeparator() {
  return (
    <div className="relative w-full z-20 bg-primary" style={{ marginBottom: '-1px' }}>
      <div
        className="mx-auto h-0 w-0"
        style={{
          borderLeft: '50vw solid transparent',
          borderRight: '50vw solid transparent',
          borderTop: '50px solid hsl(var(--background))',
        }}
      ></div>
    </div>
  );
}
